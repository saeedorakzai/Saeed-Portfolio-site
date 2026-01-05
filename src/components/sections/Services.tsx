'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

const services = [
    {
        id: 'ai-ml',
        title: 'AI & Machine Learning',
        description: 'Custom ML models, deep learning solutions, data preprocessing, and intelligent automation pipelines.',
        icon: '🤖',
        features: [
            'Machine Learning Model Development',
            'Deep Learning (CNN, RNN, ANN)',
            'Data Preprocessing & Feature Engineering',
            'Custom ML Pipelines & Toolkits',
            'Kaggle Project Reproduction'
        ],
        techStack: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter']
    },
    {
        id: 'mobile',
        title: 'Mobile App Development',
        description: 'Cross-platform iOS & Android apps with proven 100k+ downloads track record.',
        icon: '📱',
        features: [
            'React Native Development',
            'Flutter Development',
            'App Store Optimization',
            'Cross-Platform Solutions',
            'Firebase Integration'
        ],
        techStack: ['React Native', 'Flutter', 'Android', 'iOS', 'Firebase', 'Expo']
    },
    {
        id: 'web',
        title: 'Full-Stack Web Development',
        description: 'Modern web applications, e-commerce solutions, and custom platforms built with cutting-edge technologies.',
        icon: '💻',
        features: [
            'Next.js & React Applications',
            'E-commerce Solutions',
            'Custom CMS Development',
            'API Integration & Backend',
            'Database Design & Optimization'
        ],
        techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Supabase', 'PostgreSQL']
    },
    {
        id: 'creative',
        title: 'Creative & Marketing Services',
        description: 'Comprehensive creative solutions including design, video production, and SEO optimization.',
        icon: '🎨',
        features: [
            'Graphic Design & Branding',
            'UI/UX Design',
            'Video Editing & Production',
            'SEO Optimization',
            'Content Strategy'
        ],
        techStack: ['Figma', 'Adobe Creative Suite', 'Premiere Pro', 'After Effects', 'Photoshop']
    },
    {
        id: 'technical',
        title: 'Technical Services',
        description: 'Automation, database management, and development operations support.',
        icon: '🛠️',
        features: [
            'Python Automation Scripts',
            'Database Design & SQL',
            'Git/GitHub Project Setup',
            'Code Debugging & Refactoring',
            'CI/CD Pipeline Setup'
        ],
        techStack: ['Python', 'SQL', 'Git', 'GitHub', 'Docker', 'VS Code']
    }
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                            Our Services
                        </span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-3xl mx-auto">
                        Comprehensive digital solutions powered by cutting-edge technology and creative excellence
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-surface/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                        >
                            {/* Icon */}
                            <div className="text-5xl mb-4">{service.icon}</div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-text-muted mb-6">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="text-sm text-text-muted flex items-start">
                                        <span className="text-accent mr-2">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <div className="pt-4 border-t border-white/10">
                                <p className="text-xs text-text-muted mb-2">Tech Stack:</p>
                                <div className="flex flex-wrap gap-2">
                                    {service.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
