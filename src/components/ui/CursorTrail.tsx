'use client';

import { useEffect, useRef } from 'react';

export default function CursorTrail() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        life: number;
        maxLife: number;
    }>>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Create new particles
            for (let i = 0; i < 2; i++) {
                particles.current.push({
                    x: mouseX,
                    y: mouseY,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    life: 1,
                    maxLife: Math.random() * 30 + 20,
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.current = particles.current.filter((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.life++;

                const alpha = Math.max(0, 1 - particle.life / particle.maxLife);

                if (alpha > 0) {
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(0, 217, 255, ${alpha * 0.6})`;
                    ctx.fill();
                }

                return particle.life < particle.maxLife;
            });

            requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener('mousemove', handleMouseMove);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-40"
        />
    );
}
