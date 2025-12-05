'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, Preload } from '@react-three/drei';

interface SceneProps {
    children: React.ReactNode;
    className?: string;
}

export default function Scene({ children, className }: SceneProps) {
    return (
        <div className={className}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    {children}
                    <Environment preset="city" />
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}
