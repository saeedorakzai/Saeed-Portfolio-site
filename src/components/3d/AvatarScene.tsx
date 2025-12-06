'use client';

import { useGLTF, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
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

    // Stages: 
    // 0: Start (Left) -> Walk to Center
    // 1: Look at Name
    // 2: Walk to Wave Spot
    // 3: Wave
    // 4: Walk to Chair
    // 5: Sit
    const [stage, setStage] = useState(0);

    useFrame((state, delta) => {
        if (!group.current) return;

        const t = state.clock.elapsedTime;
        const pos = group.current.position;
        const rot = group.current.rotation;

        // Stage 0: Walk from Left (-6) to Center (-1)
        if (stage === 0) {
            if (pos.x < -1) {
                pos.x += delta * 1.5; // Speed
                rot.y = Math.PI / 2; // Face Right
                // Bobbing
                pos.y = Math.abs(Math.sin(t * 10)) * 0.1;
            } else {
                setStage(1);
                // Reset Y
                pos.y = 0;
            }
        }
        // Stage 1: Look at Name (Center)
        else if (stage === 1) {
            // Smoothly rotate to face camera/text
            rot.y = THREE.MathUtils.lerp(rot.y, 0, delta * 3);

            // Wait for 1.5 seconds then move on
            if (state.clock.elapsedTime > 4) { // Assuming it takes ~2-3s to walk in
                setStage(2);
            }
        }
        // Stage 2: Walk to Wave Spot (1.5)
        else if (stage === 2) {
            if (pos.x < 1.5) {
                pos.x += delta * 1.5;
                rot.y = Math.PI / 2;
                pos.y = Math.abs(Math.sin(t * 10)) * 0.1;
            } else {
                setStage(3);
                pos.y = 0;
            }
        }
        // Stage 3: Wave
        else if (stage === 3) {
            rot.y = THREE.MathUtils.lerp(rot.y, 0, delta * 5);
            // Simulate wave with rotation Z
            rot.z = Math.sin(t * 5) * 0.1;

            // Wave for 2 seconds
            if (state.clock.elapsedTime > 8) {
                setStage(4);
                rot.z = 0;
            }
        }
        // Stage 4: Walk to Chair (3)
        else if (stage === 4) {
            if (pos.x < 3) {
                pos.x += delta * 1.5;
                rot.y = Math.PI / 2;
                pos.y = Math.abs(Math.sin(t * 10)) * 0.1;
            } else {
                setStage(5);
            }
        }
        // Stage 5: Sit
        else if (stage === 5) {
            // Face desk (Back to camera/side)
            rot.y = THREE.MathUtils.lerp(rot.y, Math.PI, delta * 2);
            // Sit down
            pos.y = THREE.MathUtils.lerp(pos.y, -0.2, delta * 2);
            pos.z = THREE.MathUtils.lerp(pos.z, 0.5, delta * 2);
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
            <React.Suspense fallback={null}>
                <Avatar />
            </React.Suspense>

            <ContactShadows opacity={0.4} scale={10} blur={2} far={4} />
            <Environment preset="city" />
        </group>
    );
}

import React from 'react';
