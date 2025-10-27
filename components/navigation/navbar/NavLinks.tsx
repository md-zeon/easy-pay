import ROUTES from '@/constants/routes'
import Link from 'next/link'

const NavLinks = ({ isMobileNav }: { isMobileNav?: boolean }) => {
    return (
        <ul className={`flex gap-6 text-paragraph ${isMobileNav ? 'flex-col' : 'flex-row items-center'}`}>
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