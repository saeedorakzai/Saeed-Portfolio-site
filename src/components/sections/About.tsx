'use client';

import { motion } from 'framer-motion';
import { Target, Users, Zap, Globe } from 'lucide-react';

const values = [
    {
        icon: Target,
        title: 'Innovation First',
        description: 'We believe in the power of the first drop - that initial spark of innovation that transforms businesses.'
    },
    {
        icon: Users,
        title: 'Expert Collective',
        description: 'A curated network of specialists in AI, mobile development, web engineering, and creative services.'
    },
    {
        icon: Zap,
        title: 'Rapid Execution',
        description: 'From concept to deployment, we deliver cutting-edge solutions with speed and precision.'
    },
    {
        icon: Globe,
        title: 'Global Reach',
        description: 'Serving clients across the USA, UK, and Canada with world-class digital solutions.'
    }
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="text-accent">Us</span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
                        <span className="text-accent font-semibold">Primum Stilla</span> - Latin for "The First Drop" - represents the transformative moment when innovation begins. We are a premium digital agency specializing in AI-powered solutions, mobile app development, and full-stack web engineering.
                    </p>
                </motion.div>

                {/* Story */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 bg-surface/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Our Story</h3>
                    <div className="space-y-4 text-text-muted text-lg leading-relaxed">
                        <p>
                            In a world drowning in data, businesses need that <span className="text-accent font-semibold">first drop of clarity</span> - the breakthrough insight, the perfect app, the intelligent automation that changes everything.
                        </p>
                        <p>
                            We've delivered <span className="text-white font-semibold">300k+ mobile app downloads</span>, built AI models with <span className="text-white font-semibold">95%+ accuracy</span>, and created web platforms that scale globally. Our expertise spans machine learning, cross-platform mobile development, modern web technologies, and creative services.
                        </p>
                        <p>
                            Whether you're a startup seeking your first AI integration or an enterprise scaling your digital infrastructure, we bring the technical excellence and creative vision to make it happen.
                        </p>
                    </div>
                </motion.div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-surface/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-all duration-300"
                        >
                            <value.icon className="w-10 h-10 text-accent mb-4" />
                            <h4 className="text-xl font-bold mb-3 text-white">{value.title}</h4>
                            <p className="text-text-muted text-sm">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
