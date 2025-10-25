import ROUTES from '@/constants/routes'
import Link from 'next/link'
import React from 'react'

const NavLinks = () => {
    return (
        <ul className="flex items-center gap-6 text-paragraph">
            <li>
                <Link href={ROUTES.FEATURES} className="hover:underline">
                    Features
                </Link>
            </li>
            <li>
                <Link href={ROUTES.PRICING} className="hover:underline">
                    Pricing
                </Link>
            </li>
            <li>
                <Link href={ROUTES.SECURITY} className="hover:underline">
                    Security
                </Link>
            </li>
            <li>
                <Link href={ROUTES.BENEFITS} className="hover:underline">
                    Benefits
                </Link>
            </li>
        </ul>
    )
}

export default NavLinks