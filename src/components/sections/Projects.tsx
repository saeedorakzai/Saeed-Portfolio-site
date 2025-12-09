'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: 'Shopify Multi-Store Solution',
        description: 'Custom app for inventory sync across 3 stores with automated pricing/promo system. Achieved 30% conversion improvement through intelligent product recommendations and streamlined checkout.',
        tags: ['Shopify', 'Node.js', 'React', 'APIs', 'Automation'],
        image: '/projects/retail-analytics.jpg',
        github: 'https://github.com/saeedorakzai',
        demo: null,
    },
    {
        title: 'Wix to Shopify Migration',
        description: 'Seamlessly migrated 500+ products with preserved SEO using 301 redirects. Built custom mobile-first theme optimized for conversions and user experience.',
        tags: ['Shopify', 'Liquid', 'SEO', 'Migration', 'E-Commerce'],
        image: '/projects/gesture-control.jpg',
        github: 'https://github.com/saeedorakzai',
        demo: null,
    },
    {
        title: 'AI Retail Analytics Platform',
        description: 'Predictive sales models with 85% accuracy. Integrated Shopify API for real-time data analysis with interactive dashboards for business insights.',
        tags: ['Python', 'Machine Learning', 'Shopify API', 'Data Analytics'],
        image: '/projects/retail-analytics.jpg',
        github: 'https://github.com/saeedorakzai',
        demo: null,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        A showcase of my recent work in AI, Machine Learning, and Web Development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex space-x-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-text-muted hover:text-white transition-colors"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-text-muted hover:text-white transition-colors"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-text-muted mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-primary border border-white/5"
                                        >
                                            {tag}
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
