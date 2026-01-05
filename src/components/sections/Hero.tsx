'use client';

import { motion } from 'framer-motion';
import Scene from '@/components/3d/Scene';
import AvatarScene from '@/components/3d/AvatarScene';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';



export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Scene className="h-full w-full">
                    <AvatarScene />
                </Scene>
            </div>

            {/* Content */}
            <div className="container relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                            Primum Stilla
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text-muted mb-8 max-w-2xl mx-auto">
                        The First Drop of Innovation
                    </p>
                    <p className="text-lg text-text-muted mb-8 max-w-3xl mx-auto">
                        AI-Powered Solutions • Mobile Apps • Web Development • Creative Services
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#services"
                            className="px-8 py-3 rounded-full bg-primary text-background font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
                        >
                            Explore Services
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
                        >
                            Start Your Project
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
