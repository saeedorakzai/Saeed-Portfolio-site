'use client';

import { useGLTF, useAnimations, useFBX, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState, Suspense } from 'react';
import * as THREE from 'three';
import { Group } from 'three';

// Modern Desk Component - Sleek Design
function Desk() {
    return (
        <group position={[0, 0, 0]}>
            {/* Modern Table Top - Rounded edges effect */}
            <mesh position={[0, 0.7, 0]} castShadow>
                <boxGeometry args={[1.8, 0.04, 0.9]} />
                <meshStandardMaterial
                    color="#2a2a2a"
                    roughness={0.3}
                    metalness={0.6}
                />
            </mesh>

            {/* Sleek Legs - Modern style */}
            <mesh position={[-0.7, 0.35, 0.35]} castShadow>
                <cylinderGeometry args={[0.03, 0.03, 0.7]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0.7, 0.35, 0.35]} castShadow>
                <cylinderGeometry args={[0.03, 0.03, 0.7]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[-0.7, 0.35, -0.35]} castShadow>
                <cylinderGeometry args={[0.03, 0.03, 0.7]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0.7, 0.35, -0.35]} castShadow>
                <cylinderGeometry args={[0.03, 0.03, 0.7]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* MacBook Pro - Realistic */}
            <group position={[0.2, 0.72, 0]} rotation={[0, -0.3, 0]}>
                {/* Base/Keyboard */}
                <mesh position={[0, 0.01, 0]} castShadow>
                    <boxGeometry args={[0.35, 0.015, 0.25]} />
                    <meshStandardMaterial
                        color="#c0c0c0"
                        metalness={0.95}
                        roughness={0.05}
                    />
                </mesh>

                {/* Screen */}
                <mesh position={[0, 0.13, -0.11]} rotation={[-0.3, 0, 0]} castShadow>
                    <boxGeometry args={[0.35, 0.22, 0.01]} />
                    <meshStandardMaterial
                        color="#1a1a1a"
                        metalness={0.7}
                        roughness={0.3}
                    />
                </mesh>

                {/* Apple Logo - Glowing */}
                <mesh position={[0, 0.13, -0.115]} rotation={[-0.3, 0, 0]}>
                    <circleGeometry args={[0.04, 32]} />
                    <meshStandardMaterial
                        color="#ffffff"
                        emissive="#ffffff"
                        emissiveIntensity={0.8}
                        toneMapped={false}
                    />
                </mesh>

                {/* Screen Glow */}
                <mesh position={[0, 0.13, -0.105]} rotation={[-0.3, 0, 0]}>
                    <planeGeometry args={[0.33, 0.20]} />
                    <meshStandardMaterial
                        color="#3b82f6"
                        emissive="#3b82f6"
                        emissiveIntensity={0.3}
                        toneMapped={false}
                    />
                </mesh>
            </group>
        </group>
    );
}

// Modern Office Chair
function Chair() {
    return (
        <group position={[-0.3, 0, 0.5]} rotation={[0, 0.2, 0]}>
            {/* Seat - Cushioned look */}
            <mesh position={[0, 0.5, 0]} castShadow>
                <cylinderGeometry args={[0.25, 0.22, 0.08, 32]} />
                <meshStandardMaterial
                    color="#2c2c2c"
                    roughness={0.7}
                    metalness={0.1}
                />
            </mesh>

            {/* Backrest */}
            <mesh position={[0, 0.75, -0.15]} rotation={[-0.1, 0, 0]} castShadow>
                <boxGeometry args={[0.4, 0.45, 0.05]} />
                <meshStandardMaterial
                    color="#2c2c2c"
                    roughness={0.7}
                    metalness={0.1}
                />
            </mesh>

            {/* Central Post */}
            <mesh position={[0, 0.25, 0]}>
                <cylinderGeometry args={[0.03, 0.03, 0.5]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Base Star */}
            <mesh position={[0, 0.02, 0]} rotation={[0, 0, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.02, 5]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
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

    // Position: Right after "Ullah" - hand next to the "h"
    // Fine-tuned rotation to face viewer directly
    return <primitive object={scene} ref={group} position={[2.8, 0, 0]} rotation={[0, -Math.PI / 4, 0]} scale={1.0} />;
}

export default function AvatarScene() {
    return (
        <group position={[0, -0.7, 0]}> {/* Adjusted scene height */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[-5, 5, 5]} intensity={1} castShadow />
            <spotLight position={[0, 5, 0]} intensity={0.8} angle={0.3} penumbra={1} />

            {/* Desk and Chair Group - Left side, visible */}
            <group position={[-2, 0, 0.5]} scale={1.0}> {/* Normal size, visible position */}
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
