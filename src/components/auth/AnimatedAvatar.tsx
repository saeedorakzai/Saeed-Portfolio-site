'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface AnimatedAvatarProps {
    isPasswordFocused: boolean;
    showPassword: boolean;
    className?: string;
}

export default function AnimatedAvatar({
    isPasswordFocused,
    showPassword,
    className,
}: AnimatedAvatarProps) {
    // Placeholder for Lottie animation data
    // In a real implementation, you would import the JSON files here
    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        // Simulating loading animation data
        // fetch('/animations/avatar-eyes-open.json').then(res => res.json()).then(setAnimationData);
    }, []);

    return (
        <div className={`relative w-32 h-32 mx-auto ${className}`}>
            <motion.div
                animate={{
                    scale: isPasswordFocused ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="w-full h-full rounded-full bg-surface border-2 border-primary/20 overflow-hidden flex items-center justify-center"
            >
                {/* Placeholder Visual */}
                <div className="text-4xl">
                    {isPasswordFocused ? (showPassword ? '👀' : '🙈') : '👨‍💻'}
                </div>

                {/* Lottie Implementation (Commented out until JSONs are available) */}
                {/* 
        {animationData && (
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
          />
        )} 
        */}
            </motion.div>

            {/* Status Indicator */}
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
        </div>
    );
}
