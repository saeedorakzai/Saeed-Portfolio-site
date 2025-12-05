'use client';

import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Machine Learning',
        skills: ['Neural Networks', 'Computer Vision', 'NLP', 'Recommender Systems', 'Time-Series Analysis', 'Scikit-learn', 'TensorFlow/PyTorch'],
        color: 'text-primary',
        borderColor: 'border-primary/20',
    },
    {
        title: 'Development',
        skills: ['Python', 'SQL', 'JavaScript/TypeScript', 'React', 'Next.js', 'Git', 'REST APIs'],
        color: 'text-secondary',
        borderColor: 'border-secondary/20',
    },
    {
        title: 'Tools & Cloud',
        skills: ['Streamlit', 'OpenCV', 'MediaPipe', 'MySQL', 'Firebase', 'Supabase', 'Vercel'],
        color: 'text-accent',
        borderColor: 'border-accent/20',
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-surface relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-accent">Skills</span>
                    </h2>
                    <p className="text-text-muted">
                        A comprehensive toolkit for building intelligent solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-background/50 p-8 rounded-2xl border ${category.borderColor} hover:border-opacity-50 transition-all duration-300`}
                        >
                            <h3 className={`text-xl font-bold mb-6 ${category.color}`}>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm font-medium bg-white/5 rounded-lg text-text-muted hover:text-white hover:bg-white/10 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
