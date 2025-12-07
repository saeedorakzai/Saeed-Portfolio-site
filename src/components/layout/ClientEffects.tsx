'use client';

import dynamic from 'next/dynamic';
import LoadingScreen from "@/components/ui/LoadingScreen";

const ParticleField = dynamic(() => import("@/components/3d/ParticleField"), { ssr: false });
const CursorTrail = dynamic(() => import("@/components/ui/CursorTrail"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ui/ScrollProgress"), { ssr: false });

export default function ClientEffects() {
    return (
        <>
            <LoadingScreen />
            <ScrollProgress />
            <CursorTrail />
            <ParticleField />
        </>
    );
}
