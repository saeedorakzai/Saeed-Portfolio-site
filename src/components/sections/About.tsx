'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Profile Image / Avatar */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/3 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
                            <Image
                                src="/profile.jpg"
                                alt="Saeed Ullah"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Bio Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-2/3"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-primary">Me</span>
                        </h2>

                        <div className="space-y-4 text-text-muted text-lg leading-relaxed">
                            <p>
                                I am an <strong className="text-white">AI Solutions Developer & Shopify Specialist</strong> with 6 months of hands-on experience delivering e-commerce solutions for UK clients. I specialize in the Shopify ecosystem, building production stores, custom apps, and managing complete operations from pricing to promotions.
                            </p>
                            <p>
                                My expertise spans modern website builders (Wix, Squarespace, Webflow) and implementing marketing strategies that drive conversions. I've successfully increased client conversion rates by <strong className="text-primary">30%</strong> through newsletter integration and marketing optimization.
                            </p>
                            <p>
                                Beyond e-commerce, I'm passionate about AI and machine learning. As the <strong className="text-white">Founding Chair of BitsNBytes Society</strong> (100+ members) and <strong className="text-white">Co-Founder of University Help Desk</strong>, I believe in the power of knowledge sharing and continuous learning.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                                <span className="block text-2xl font-bold text-primary">6+</span>
                                <span className="text-sm text-text-muted">Months Experience</span>
                            </div>
                            <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                                <span className="block text-2xl font-bold text-secondary">15+</span>
                                <span className="text-sm text-text-muted">Sites Built</span>
                            </div>
                            <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                                <span className="block text-2xl font-bold text-accent">5+</span>
                                <span className="text-sm text-text-muted">Shopify Stores</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
