'use client';

import { useGLTF, useAnimations, useFBX, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import { Group } from 'three';

// Desk Component - Adjusted for better layout
function Desk() {
    return (
        <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
            {/* Table Top */}
            <mesh position={[0, 0.75, 0]}>
                <boxGeometry args={[2.2, 0.05, 0.8]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
            </mesh>
            {/* Legs */}
            <mesh position={[-1.0, 0.375, 0.35]}>
                <boxGeometry args={[0.05, 0.75, 0.05]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[1.0, 0.375, 0.35]}>
                <boxGeometry args={[0.05, 0.75, 0.05]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[-1.0, 0.375, -0.35]}>
                <boxGeometry args={[0.05, 0.75, 0.05]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[1.0, 0.375, -0.35]}>
                <boxGeometry args={[0.05, 0.75, 0.05]} />
                <meshStandardMaterial color="#333" />
            </mesh>

            {/* Laptop - Centered */}
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

// Chair Component - Tucked in
function Chair() {
    return (
        <group position={[0, 0, 0.6]} rotation={[0, -Math.PI, 0]}>
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
    const { animations: waveAnim } = useFBX('/models/waving.fbx');
    // We can add an idle animation later if needed, for now just standing is fine or using wave start frame

    // Name them
    waveAnim[0].name = 'wave';

    // Clean names
    const cleanAnimation = (clips: THREE.AnimationClip[]) => {
        clips.forEach(clip => {
            clip.tracks.forEach(track => {
                track.name = track.name.replace('mixamorig', '');
            });
        });
    };

    useEffect(() => {
        if (waveAnim) {
            cleanAnimation(waveAnim);
        }
    }, [waveAnim]);

    const { actions } = useAnimations([waveAnim[0]], group);
    const [isWaving, setIsWaving] = useState(true); // Start with wave

    // Periodic Waving Logic
    useEffect(() => {
        if (!actions['wave']) return;

        const waveAction = actions['wave'];

        if (isWaving) {
            // Play Wave
            waveAction.reset().fadeIn(0.5).setLoop(THREE.LoopRepeat, 2).play(); // Wave twice

            // When finished (approx 2 loops * duration), stop and wait
            // Since LoopRepeat with count doesn't auto-stop in some versions without clamp, 
            // let's use a timer for simplicity and robustness
            const waveDuration = waveAction.getClip().duration * 2; // 2 loops

            const stopTimer = setTimeout(() => {
                waveAction.fadeOut(0.5);
                setIsWaving(false);
            }, waveDuration * 1000);

            return () => clearTimeout(stopTimer);
        } else {
            // Wait 5-6 seconds then wave again
            const startTimer = setTimeout(() => {
                setIsWaving(true);
            }, 6000); // 6 seconds wait

            return () => clearTimeout(startTimer);
        }
    }, [isWaving, actions]);

    // Position: Far Right of the screen, standing on ground
    // Rotation: Slightly facing the camera
    return <primitive object={scene} ref={group} position={[4, -0.2, 1]} rotation={[0, -0.8, 0]} scale={1.3} />;
}

export default function AvatarScene() {
    return (
        <group position={[0, -0.5, 0]}> {/* Adjusted scene height */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[-5, 5, 5]} intensity={1} castShadow />
            <spotLight position={[0, 5, 0]} intensity={0.8} angle={0.3} penumbra={1} />

            {/* Desk and Chair Group - Far Left Background */}
            <group position={[-3.5, 0, -1]} scale={0.7}> {/* Smaller and further back */}
                <Desk />
                <Chair />
            </group>

            <Suspense fallback={null}>
                <Avatar />
            </Suspense>

            <ContactShadows opacity={0.4} scale={10} blur={2} far={4} />
            <Environment preset="city" />
        </group>
    );
}
