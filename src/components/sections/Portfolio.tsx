'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Download } from 'lucide-react';

const portfolioApps = [
    {
        name: 'Yumo',
        description: 'A feature-rich mobile application serving 100k+ active users with seamless cross-platform experience.',
        downloads: '100k+',
        platform: 'Android & iOS',
        url: 'https://play.google.com/store/apps/details?id=com.lexur.yumo',
        image: '/apps/yumo.png',
        techStack: ['React Native', 'Firebase', 'Redux', 'Node.js']
    },
    {
        name: 'CanvasFlow',
        description: 'Creative design tool empowering users to create stunning visuals with intuitive interface.',
        downloads: '100k+',
        platform: 'Android & iOS',
        url: 'https://play.google.com/store/apps/details?id=com.lexur.canvasflow',
        image: '/apps/canvasflow.png',
        techStack: ['Flutter', 'Firebase', 'Cloud Storage', 'Material Design']
    },
    {
        name: 'Rezume',
        description: 'Professional resume builder helping users craft perfect CVs with AI-powered suggestions.',
        downloads: '100k+',
        platform: 'Android & iOS',
        url: 'https://play.google.com/store/apps/details?id=com.aftab.rezume',
        image: '/apps/rezume.png',
        techStack: ['React Native', 'TypeScript', 'PDF Generation', 'AI Integration']
    }
];

const aiProjects = [
    {
        title: 'Machine Learning Pipeline Toolkit',
        description: 'Interactive Jupyter-based ML toolkit with automated model selection and hyperparameter tuning.',
        category: 'AI/ML',
        impact: 'Reduced model development time by 60%',
        techStack: ['Python', 'Scikit-learn', 'Jupyter', 'Pandas']
    },
    {
        title: 'Deep Learning Image Classification',
        description: 'CNN-based image recognition system with 95%+ accuracy for retail automation.',
        category: 'Deep Learning',
        impact: '95% accuracy on production dataset',
        techStack: ['TensorFlow', 'PyTorch', 'OpenCV', 'NumPy']
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 bg-surface/30">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                            Our Portfolio
                        </span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-3xl mx-auto">
                        Proven track record with 100k+ downloads and cutting-edge AI solutions
                    </p>
                </motion.div>

                {/* Mobile Apps Section */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold mb-8 text-white">
                        Mobile Applications
                        <span className="text-accent ml-3">300k+ Total Downloads</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioApps.map((app, index) => (
                            <motion.div
                                key={app.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-background/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                            >
                                {/* App Image Placeholder */}
                                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                                    <span className="text-6xl">📱</span>
                                </div>

                                <div className="p-6">
                                    {/* App Name & Downloads */}
                                    <div className="flex items-start justify-between mb-3">
                                        <h4 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                                            {app.name}
                                        </h4>
                                        <div className="flex items-center gap-1 text-accent">
                                            <Download className="w-4 h-4" />
                                            <span className="text-sm font-semibold">{app.downloads}</span>
                                        </div>
                                    </div>

                                    {/* Platform */}
                                    <p className="text-sm text-text-muted mb-3">{app.platform}</p>

                                    {/* Description */}
                                    <p className="text-text-muted mb-4">{app.description}</p>

                                    {/* Tech Stack */}
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2">
                                            {app.techStack.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* View on Play Store */}
                                    <a
                                        href={app.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors"
                                    >
                                        View on Play Store
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* AI/ML Projects Section */}
                <div>
                    <h3 className="text-3xl font-bold mb-8 text-white">AI & Machine Learning Projects</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {aiProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-background/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h4 className="text-xl font-bold text-white">{project.title}</h4>
                                    <span className="text-xs px-3 py-1 bg-accent/20 text-accent rounded-full">
                                        {project.category}
                                    </span>
                                </div>

                                <p className="text-text-muted mb-4">{project.description}</p>

                                <div className="mb-4">
                                    <p className="text-sm text-accent font-semibold">
                                        Impact: {project.impact}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 bg-white/5 text-text-muted rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
