'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
    {
        type: 'work',
        title: 'AI Solutions Developer',
        organization: 'Freelance / Self-Employed',
        date: '2023 - Present',
        description: 'Developing custom AI solutions for clients, focusing on NLP and Computer Vision applications.',
    },
    {
        type: 'education',
        title: 'Bachelor of Science in Computer Science',
        organization: 'Abdul Wali Khan University Mardan',
        date: '2020 - 2024',
        description: 'Focus on Artificial Intelligence and Data Science. Founding Chair of BitsNBytes Society.',
    },
    {
        type: 'leadership',
        title: 'Founding Chair',
        organization: 'AWKUM BitsNBytes Society',
        date: '2022 - 2024',
        description: 'Led a student organization to promote tech education, organized hackathons and workshops.',
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-background relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Experience & <span className="text-secondary">Education</span>
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="flex-1"></div>

                                {/* Icon */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-surface border border-primary/50 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,217,255,0.3)]">
                                    {exp.type === 'work' ? (
                                        <Briefcase className="w-5 h-5 text-primary" />
                                    ) : exp.type === 'education' ? (
                                        <GraduationCap className="w-5 h-5 text-secondary" />
                                    ) : (
                                        <Calendar className="w-5 h-5 text-accent" />
                                    )}
                                </div>

                                <div className="flex-1 pl-12 md:pl-0">
                                    <div className={`bg-surface p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                        }`}>
                                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-text-muted mb-3">
                                            {exp.date}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                                        <h4 className="text-primary font-medium mb-3">{exp.organization}</h4>
                                        <p className="text-text-muted text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
