import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of Service for Primum Stilla',
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background text-text py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                    Terms of <span className="text-accent">Service</span>
                </h1>

                <div className="space-y-8 text-text-muted leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the Primum Stilla website and services, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                        <p>
                            Primum Stilla provides digital services including but not limited to:
                        </p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                            <li>AI and Machine Learning solutions</li>
                            <li>Mobile application development</li>
                            <li>Full-stack web development</li>
                            <li>Creative and marketing services</li>
                            <li>Technical consulting and support</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Client Responsibilities</h2>
                        <p>
                            Clients agree to:
                        </p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                            <li>Provide accurate and complete information</li>
                            <li>Respond to requests for information in a timely manner</li>
                            <li>Review and approve deliverables within agreed timeframes</li>
                            <li>Make payments according to agreed terms</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                        <p>
                            Upon full payment, clients receive ownership of the final deliverables. Primum Stilla retains the right to showcase completed work in our portfolio unless otherwise agreed in writing.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Confidentiality</h2>
                        <p>
                            We maintain strict confidentiality of all client information and project details. We will not disclose any confidential information to third parties without explicit consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                        <p>
                            Primum Stilla shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
                        <p>
                            Either party may terminate services with written notice. Clients are responsible for payment of work completed up to the termination date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
                        <p>
                            For questions about these Terms of Service, please contact us at:{' '}
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
