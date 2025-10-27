export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-white">
            <main className="pt-20 pb-16">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>

                        <p className="text-gray-600 mb-8">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-700 leading-relaxed">
                                By accessing and using Easy Pay, you accept and agree to be bound by the terms and provision of this agreement.
                                If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Easy Pay is a fintech platform that offers secure, seamless, and fee-free payments for effortless global transactions.
                                We provide payment processing services, financial tools, and related services to our users.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                To use certain features of our service, you may need to create an account. You are responsible for:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Providing accurate and complete information</li>
                                <li>Maintaining the confidentiality of your account credentials</li>
                                <li>All activities that occur under your account</li>
                                <li>Notifying us immediately of any unauthorized use</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                You agree not to use the service to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Infringe on intellectual property rights</li>
                                <li>Transmit any harmful, threatening, or offensive content</li>
                                <li>Attempt to gain unauthorized access to our systems</li>
                                <li>Interfere with or disrupt the service</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For services that involve payment:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                                <li>All fees are clearly stated and agreed upon before processing</li>
                                <li>Payments are processed securely through our platform</li>
                                <li>Refunds are subject to our refund policy</li>
                                <li>You are responsible for all applicable taxes</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
                            <p className="text-gray-700 leading-relaxed">
                                The service and its original content, features, and functionality are and will remain the exclusive property
                                of Easy Pay and its licensors. The service is protected by copyright, trademark, and other laws.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
                            <p className="text-gray-700 leading-relaxed">
                                In no event shall Easy Pay, its directors, employees, or agents be liable for any indirect, incidental,
                                special, consequential, or punitive damages, including without limitation, loss of profits, data, use,
                                goodwill, or other intangible losses, resulting from your use of the service.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We reserve the right to modify or replace these terms at any time. If a revision is material, we will try
                                to provide at least 30 days notice prior to any new terms taking effect.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
                            <p className="text-gray-700 leading-relaxed">
                                If you have any questions about these Terms & Conditions, please contact us through our contact page
                                or the information provided on our website.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
