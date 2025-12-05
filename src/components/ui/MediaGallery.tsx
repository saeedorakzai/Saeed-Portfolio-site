'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Upload, Trash2 } from 'lucide-react';

interface MediaItem {
    id: string;
    type: 'image' | 'video' | 'audio';
    url: string;
    title: string;
    description?: string;
}

const sampleMedia: MediaItem[] = [
    {
        id: '1',
        type: 'image',
        url: '/projects/retail-analytics.jpg',
        title: 'Retail AI Analytics Dashboard',
        description: 'Interactive dashboard showing predictive analytics',
    },
    {
        id: '2',
        type: 'image',
        url: '/projects/gesture-control.jpg',
        title: 'Gesture Control System',
        description: 'Real-time hand tracking and gesture recognition',
    },
];

export default function MediaGallery() {
    const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
    const [media, setMedia] = useState<MediaItem[]>(sampleMedia);

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Media <span className="text-primary">Gallery</span>
                    </h2>
                    <p className="text-text-muted">
                        Explore my work through images, videos, and demos
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {media.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedMedia(item)}
                            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group border border-white/5 hover:border-primary/50 transition-all"
                        >
                            {item.type === 'image' && (
                                <Image
                                    src={item.url}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            )}

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <div>
                                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                                    {item.description && (
                                        <p className="text-sm text-text-muted">{item.description}</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedMedia && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMedia(null)}
                            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative max-w-5xl w-full bg-surface rounded-2xl overflow-hidden border border-white/10"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedMedia(null)}
                                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>

                                {/* Media Content */}
                                <div className="relative aspect-video">
                                    {selectedMedia.type === 'image' && (
                                        <Image
                                            src={selectedMedia.url}
                                            alt={selectedMedia.title}
                                            fill
                                            className="object-contain"
                                        />
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-6 bg-surface/50 backdrop-blur-sm">
                                    <h3 className="text-2xl font-bold mb-2">{selectedMedia.title}</h3>
                                    {selectedMedia.description && (
                                        <p className="text-text-muted">{selectedMedia.description}</p>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
