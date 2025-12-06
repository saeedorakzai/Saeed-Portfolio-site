'use client';

import { useGLTF, useAnimations, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Group } from 'three';

// Placeholder Desk Component
function Desk() {
    return (
        <group position={[1.5, 0, 0]}>
            {/* Table Top */}
            <mesh position={[0, 0.75, 0]}>
                <boxGeometry args={[1.5, 0.05, 0.8]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
            </mesh>
            {/* Legs */}
            <mesh position={[-0.7, 0.375, 0.35]}>
                <boxGeometry args={[0.05, 0.75, 0.05]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[0.7, 0.375, 0.35]}>
                <boxGeometry args={[0.05, 0.75, 0.05]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[-0.7, 0.375, -0.35]}>
                <boxGeometry args={[0.05, 0.75, 0.05]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[0.7, 0.375, -0.35]}>
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
        <group position={[1.5, 0, 0.8]} rotation={[0, -Math.PI / 2, 0]}>
            {/* Seat */}
            <mesh position={[0, 0.45, 0]}>
                <boxGeometry args={[0.5, 0.05, 0.5]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            {/* Back */}
            <mesh position={[-0.23, 0.7, 0]}>
                <boxGeometry args={[0.05, 0.5, 0.5]} />
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
    // Attempt to load the model. If it fails, it will just return null/error which we can catch or it will just not render.
    // Note: We are assuming the user will provide 'avatar.glb' in public/models/
    const { scene, animations } = useGLTF('/models/avatar.glb', undefined, undefined, (error) => {
        console.warn("Avatar model not found yet. Please download avatar.glb to public/models/");
    });
    const { actions, names } = useAnimations(animations, group);
    const [stage, setStage] = useState<'walking' | 'waving' | 'sitting'>('walking');

    useEffect(() => {
        // Animation Logic
        // This is a "best effort" logic assuming standard animation names or just playing the first one.
        // If the user downloads a model with specific names, we might need to adjust.
        // For now, we'll try to find common names or just play the first available animation.

        if (!actions || names.length === 0) return;

        const playAnimation = (name: string) => {
            // Try to find an animation that contains the name (case insensitive)
            const clipName = names.find(n => n.toLowerCase().includes(name.toLowerCase()));
            if (clipName) {
                actions[clipName]?.reset().fadeIn(0.5).play();
                return actions[clipName];
            }
            // Fallback: Play the first one if nothing matches
            if (names.length > 0 && name === 'idle') {
                actions[names[0]]?.reset().fadeIn(0.5).play();
                return actions[names[0]];
            }
            return null;
        };

        // Sequence
        // 1. Walk in
        playAnimation('walk');

        const waveTimer = setTimeout(() => {
            setStage('waving');
            // Stop walk, play wave
            // Note: This requires the model to have these specific animations. 
            // If not, we will just rely on position movement.
            const walkAnim = names.find(n => n.toLowerCase().includes('walk'));
            if (walkAnim) actions[walkAnim]?.fadeOut(0.5);

            playAnimation('wave') || playAnimation('idle');
        }, 3000);

        const sitTimer = setTimeout(() => {
            setStage('sitting');
            const waveAnim = names.find(n => n.toLowerCase().includes('wave'));
            if (waveAnim) actions[waveAnim]?.fadeOut(0.5);

            playAnimation('sit') || playAnimation('idle');
        }, 6000);

        return () => {
            clearTimeout(waveTimer);
            clearTimeout(sitTimer);
        };
    }, [actions, names]);

    useFrame((state, delta) => {
        if (!group.current) return;

        // Movement Logic
        if (stage === 'walking') {
            // Move from left (-2) to center (0)
            if (group.current.position.x < 0) {
                group.current.position.x += delta * 1; // Speed
                group.current.rotation.y = Math.PI / 2; // Face right
            } else {
                // Reached center, face camera
                group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, 0, delta * 5);
            }
        } else if (stage === 'waving') {
            // Stand still, face camera
            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, 0, delta * 5);
        } else if (stage === 'sitting') {
            // Move to desk (1.5)
            if (group.current.position.x < 1.0) {
                group.current.position.x += delta * 1;
                group.current.rotation.y = Math.PI / 2; // Face right
            } else {
                // Sit down orientation
                group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, -Math.PI / 2, delta * 5);
                // Adjust Y for sitting (simplified)
                // group.current.position.y = 0; 
            }
        }
    });

    return <primitive object={scene} ref={group} position={[-3, 0, 0]} scale={1.5} />;
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
            <React.Suspense fallback={null}>
                <Avatar />
            </React.Suspense>

            <ContactShadows opacity={0.4} scale={10} blur={2} far={4} />
            <Environment preset="city" />
        </group>
    );
}

import React from 'react';
