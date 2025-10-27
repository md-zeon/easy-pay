import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-12 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    {/* Logo + Description */}
                    <div className="space-y-4">
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center space-x-1">
                            {/* <Logo /> */}
                            <Image
                                src='/icons/logo.svg'
                                alt="Logo"
                                width={32}
                                height={32}
                            />
                            <p className='font-bold text-xl sm:text-2xl pb-2'>Easy Pay</p>

                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                            Easy Pay offers secure, seamless, and fee-free payments for effortless global transactions.
                        </p>
                    </div>

                    <div className="flex gap-40">
                        {/* Short Links */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Short links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href={ROUTES.FEATURES}
                                        className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={ROUTES.HOW_IT_WORKS}
                                        className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                                    >
                                        How it works
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={ROUTES.SECURITY}
                                        className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                                    >
                                        Security
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={ROUTES.TESTIMONIAL}
                                        className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                                    >
                                        Testimonial
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Other Pages */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Other pages</h4>
                            <ul className="space-y-2">
                                {/* {['Privacy policy', 'Terms & conditions', '404'].map((item) => ( */}
                                <li>
                                    <Link
                                        href={ROUTES.PRIVACY_POLICY}
                                        className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                                    >
                                        Privacy policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={ROUTES.TERMS_AND_CONDITIONS}
                                        className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                                    >
                                        Terms & conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/404"
                                        className="text-gray-500 hover:text-purple-600 transition-colors text-sm"
                                    >
                                        404
                                    </Link>
                                </li>
                                {/* ))} */}
                            </ul>
                        </div>
                    </div>



                    {/* Empty column for spacing on large screens */}
                    {/* <div className="hidden md:block"></div> */}
                </div>

                {/* Bottom Copyright with GLOW */}
                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                    <p
                        className="text-sm text-gray-500"
                    >
                        2025. Easy Pay. All rights reserved. Fintech Landing Page.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;