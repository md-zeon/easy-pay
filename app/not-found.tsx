import Link from "next/link";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white">
            <main className="pt-20 pb-16">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <div className="space-y-8">
                        {/* 404 Illustration */}
                        <div className="relative">
                            <div className="text-8xl font-bold text-purple-600 mb-4">404</div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 bg-purple-100 rounded-full opacity-20"></div>
                            </div>
                        </div>

                        {/* Error Message */}
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold text-gray-900">Page Not Found</h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/">
                                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                                    Go Home
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 font-medium py-3 px-8 rounded-lg transition-colors">
                                    Contact Support
                                </Button>
                            </Link>
                        </div>

                        {/* Suggestions */}
                        <div className="bg-gray-50 p-8 rounded-lg max-w-2xl mx-auto">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">What you can do:</h2>
                            <ul className="text-gray-600 space-y-2 text-left">
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-purple-600 rounded-full shrink-0"></span>
                                    <span>Check if the URL is correct</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-purple-600 rounded-full shrink-0"></span>
                                    <span>Go back to the previous page</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-purple-600 rounded-full shrink-0"></span>
                                    <span>Visit our homepage to find what you need</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-purple-600 rounded-full shrink-0"></span>
                                    <span>Contact us if you need help</span>
                                </li>
                            </ul>
                        </div>

                        {/* Popular Links */}
                        <div className="border-t border-gray-200 pt-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Pages</h3>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link href={`/${ROUTES.FEATURES}`} className="text-purple-600 hover:text-purple-800 underline">
                                    Features
                                </Link>
                                <Link href={`/${ROUTES.PRICING}`} className="text-purple-600 hover:text-purple-800 underline">
                                    Pricing
                                </Link>
                                <Link href={`/${ROUTES.SECURITY}`} className="text-purple-600 hover:text-purple-800 underline">
                                    Security
                                </Link>
                                <Link href={`/${ROUTES.HOW_IT_WORKS}`} className="text-purple-600 hover:text-purple-800 underline">
                                    How It Works
                                </Link>
                                <Link href={`/${ROUTES.TESTIMONIAL}`} className="text-purple-600 hover:text-purple-800 underline">
                                    Testimonials
                                </Link>
                                <Link href={`${ROUTES.CONTACT}`} className="text-purple-600 hover:text-purple-800 underline">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
