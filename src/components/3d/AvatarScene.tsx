'use client';

import { useGLTF, useAnimations, useFBX, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import { Group } from 'three';

// Placeholder Desk Component
function Desk() {
    return (
        <group position={[3, 0, 0]} rotation={[0, -0.5, 0]}>
            {/* Table Top */}
            <mesh position={[0, 0.75, 0]}>
                <boxGeometry args={[1.8, 0.05, 0.8]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
            </mesh>
            {/* Legs */}
            <mesh position={[-0.8, 0.375, 0.35]}>
                <boxGeometry args={[0.05, 0.75, 0.05]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[0.8, 0.375, 0.35]}>
                <boxGeometry args={[0.05, 0.75, 0.05]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[-0.8, 0.375, -0.35]}>
                <boxGeometry args={[0.05, 0.75, 0.05]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[0.8, 0.375, -0.35]}>
                <boxGeometry args={[0.05, 0.75, 0.05]} />
                <meshStandardMaterial color="#333" />
            </mesh>

            {/* Laptop */}
            <group position={[0, 0.78, 0]}>
                {/* Base */}
                <mesh position={[0, 0, 0.1]}>
                    <boxGeometry args={[0.4, 0.02, 0.3]} />
                    <meshStandardMaterial color="#222" />
                </mesh>
                {/* Screen */}
                <mesh position={[0, 0.15, -0.05]} rotation={[-0.2, 0, 0]}>
                    <boxGeometry args={[0.4, 0.3, 0.02]} />
                    <meshStandardMaterial color="#111" />
                </mesh>
                {/* Screen Glow */}
                <mesh position={[0, 0.15, -0.04]} rotation={[-0.2, 0, 0]}>
                    <planeGeometry args={[0.38, 0.28]} />
                    <meshBasicMaterial color="#00D9FF" toneMapped={false} />
                </mesh>
            </group>
        </group>
    );
}

// Placeholder Chair Component
function Chair() {
    return (
        <group position={[3, 0, 0.8]} rotation={[0, -Math.PI, 0]}>
            {/* Seat */}
            <mesh position={[0, 0.45, 0]}>
                <boxGeometry args={[0.5, 0.05, 0.5]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            {/* Back */}
            <mesh position={[0, 0.7, 0.23]}>
                <boxGeometry args={[0.5, 0.5, 0.05]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            {/* Base */}
            <mesh position={[0, 0.225, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 0.45]} />
                <meshStandardMaterial color="#222" />
            </mesh>
        </group>
    );
}

function Avatar() {
    const group = useRef<Group>(null);
    const { scene } = useGLTF('/models/avatar.glb');

    // Load Animations
    const { animations: walkAnim } = useFBX('/models/walking.fbx');
    const { animations: waveAnim } = useFBX('/models/waving.fbx');
    const { animations: sitAnim } = useFBX('/models/sitting.fbx');

    // Name them for easy access
    walkAnim[0].name = 'walk';
    waveAnim[0].name = 'wave';
    sitAnim[0].name = 'sit';

    // Helper to clean Mixamo animation track names
    const cleanAnimation = (clips: THREE.AnimationClip[]) => {
        clips.forEach(clip => {
            clip.tracks.forEach(track => {
                // Remove 'mixamorig' prefix from bone names
                track.name = track.name.replace('mixamorig', '');

                // Ensure it targets the correct root bone if needed (usually Hips)
                if (track.name.startsWith('.position')) {
                    // track.name = 'Hips.position'; // Sometimes needed, but let's try just stripping first
                }
            });
        });
    };

    useEffect(() => {
        if (walkAnim && waveAnim && sitAnim) {
            cleanAnimation(walkAnim);
            cleanAnimation(waveAnim);
            cleanAnimation(sitAnim);
        }
    }, [walkAnim, waveAnim, sitAnim]);

    const { actions } = useAnimations([walkAnim[0], waveAnim[0], sitAnim[0]], group);

    // Stages: 
    // 0: Start (Left) -> Walk to Center
    // 1: Look at Name
    // 2: Walk to Wave Spot
    // 3: Wave
    // 4: Walk to Chair
    // 5: Sit
    const [stage, setStage] = useState(0);

    useEffect(() => {
        if (!actions) return;

        // Initial Animation
        actions['walk']?.reset().fadeIn(0.5).play();

        return () => {
            actions['walk']?.fadeOut(0.5);
            actions['wave']?.fadeOut(0.5);
            actions['sit']?.fadeOut(0.5);
        };
    }, [actions]);

    useFrame((state, delta) => {
        if (!group.current) return;

        const t = state.clock.elapsedTime;
        const pos = group.current.position;
        const rot = group.current.rotation;

        // Stage 0: Walk from Start (-6) to Chair Area (2.5)
        if (stage === 0) {
            if (pos.x < 2.5) {
                pos.x += delta * 0.8; // Slower Speed (was 1.5)
                rot.y = Math.PI / 2; // Face Right

                // Ensure walk is playing
                if (actions['walk'] && !actions['walk'].isRunning()) {
                    actions['walk'].reset().fadeIn(0.2).play();
                    actions['wave']?.fadeOut(0.2);
                    actions['sit']?.fadeOut(0.2);
                }
            } else {
                setStage(1);
            }
        }
        // Stage 1: Wave at Chair
        else if (stage === 1) {
            // Face Camera
            rot.y = THREE.MathUtils.lerp(rot.y, 0, delta * 3);

            if (actions['walk']?.isRunning()) actions['walk'].fadeOut(0.5);
            if (actions['wave'] && !actions['wave'].isRunning()) {
                actions['wave'].reset().fadeIn(0.5).play();
            }

            // Wait for wave to finish (approx 3 seconds)
            // We use a local timer check relative to when this stage started would be better, 
            // but for simplicity we check if wave is almost done or just use time
            // Let's use a simple counter or just rely on global time if we tracked stage start.
            // For now, let's just wait a bit.
            // A better way is to check action time, but let's use a simple delay logic
            // Since we don't track stage start time easily here without extra state, 
            // we can just check if the wave action has played for a duration.

            // Hacky but effective: check if we've been in this stage long enough? 
            // Actually, let's just let it wave for a fixed time based on global clock? 
            // No, that's hard. Let's just use a simple counter in a ref if needed, 
            // or just check if action.time > 2.5 (assuming loop)

            if (actions['wave'] && actions['wave'].time > 2.5) {
                setStage(2);
            }
        }
        // Stage 2: Walk to Chair Seat (3) and Sit
        else if (stage === 2) {
            if (pos.x < 3) {
                pos.x += delta * 0.8;
                rot.y = Math.PI / 2;

                if (actions['wave']?.isRunning()) actions['wave'].fadeOut(0.2);
                if (actions['walk'] && !actions['walk'].isRunning()) {
                    actions['walk'].reset().fadeIn(0.2).play();
                }
            } else {
                setStage(3);
            }
        }
        // Stage 3: Sit
        else if (stage === 3) {
            rot.y = THREE.MathUtils.lerp(rot.y, Math.PI, delta * 2);
            // Align with chair Z (was 0.5, let's make it smoother)
            pos.z = THREE.MathUtils.lerp(pos.z, 0.5, delta * 2);

            if (actions['walk']?.isRunning()) actions['walk'].fadeOut(0.5);
            if (actions['sit'] && !actions['sit'].isRunning()) {
                actions['sit'].reset().fadeIn(0.5).play();
                actions['sit'].clampWhenFinished = true;
                actions['sit'].loop = THREE.LoopOnce;
            }
        }
    });

    return <primitive object={scene} ref={group} position={[-6, 0, 0]} scale={1.6} />;
}

export default function AvatarScene() {
    return (
        <group position={[0, -1, 0]}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-5, 5, 5]} intensity={1} castShadow />
            <spotLight position={[0, 5, 0]} intensity={0.8} angle={0.3} penumbra={1} />

            <Desk />
            <Chair />

            {/* Fallback if model is missing: Just show the desk setup */}
            <Suspense fallback={null}>
                <Avatar />
            </Suspense>

            <ContactShadows opacity={0.4} scale={10} blur={2} far={4} />
            <Environment preset="city" />
        </group>
    );
}
