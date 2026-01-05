import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Primum Stilla - How we handle your data',
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background text-text py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                    Privacy <span className="text-accent">Policy</span>
                </h1>

                <div className="space-y-8 text-text-muted leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                        <p>
                            At Primum Stilla, we collect information you provide directly to us when you:
                        </p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                            <li>Contact us through our website forms</li>
                            <li>Subscribe to our newsletter or updates</li>
                            <li>Request our services or consultations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                        <p>
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                            <li>Respond to your inquiries and provide customer support</li>
                            <li>Send you updates about our services (with your consent)</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
                        <p>
                            We may use third-party services for analytics and communication. These services have their own privacy policies governing the use of your information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                        <p>
                            You have the right to:
                        </p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                            <li>Access your personal data</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Opt-out of marketing communications</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:{' '}
                            <a href="mailto:hello@primumstilla.com" className="text-accent hover:underline">
                                hello@primumstilla.com
                            </a>
                        </p>
                    </section>

                    <p className="text-sm mt-12 pt-8 border-t border-white/10">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>
            </div>
        </main>
    );
}
