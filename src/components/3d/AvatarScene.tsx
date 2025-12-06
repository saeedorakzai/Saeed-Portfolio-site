'use client';

import { useGLTF, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
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
    const { scene } = useGLTF('/models/avatar.glb');
    const [stage, setStage] = useState<'walking' | 'waving' | 'sitting'>('walking');

    useEffect(() => {
        // Simple sequence without animations
        const waveTimer = setTimeout(() => {
            setStage('waving');
        }, 3000);

        const sitTimer = setTimeout(() => {
            setStage('sitting');
        }, 6000);

        return () => {
            clearTimeout(waveTimer);
            clearTimeout(sitTimer);
        };
    }, []);

    useFrame((state, delta) => {
        if (!group.current) return;

        // Movement Logic (Sliding since no animations)
        if (stage === 'walking') {
            // Move from left (-2) to center (0)
            if (group.current.position.x < 0) {
                group.current.position.x += delta * 1; // Speed
                group.current.rotation.y = Math.PI / 2; // Face right
                // Add bobbing motion to simulate walking
                group.current.position.y = Math.sin(state.clock.elapsedTime * 10) * 0.05;
            } else {
                // Reached center, face camera
                group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, 0, delta * 5);
                group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, 0, delta * 5);
            }
        } else if (stage === 'waving') {
            // Stand still, face camera
            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, 0, delta * 5);
            // Add slight sway
            group.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.02;
        } else if (stage === 'sitting') {
            // Move to desk (1.5)
            if (group.current.position.x < 1.0) {
                group.current.position.x += delta * 1;
                group.current.rotation.y = Math.PI / 2; // Face right
                group.current.position.y = Math.sin(state.clock.elapsedTime * 10) * 0.05;
            } else {
                // Sit down orientation
                group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, -Math.PI / 2, delta * 5);
                // Lower into chair
                group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -0.5, delta * 5);
                group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, 0.2, delta * 5);
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
