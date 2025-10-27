"use client"
import Image from "next/image";
import Marquee from "react-fast-marquee";

const BrandsMarquee = () => {
    return (
        <Marquee pauseOnHover autoFill>
            {/* Brand 1 */}
            <Image
                src="/brands/brand-1.svg"
                alt="Brand 1"
                width={180}
                height={40}
                className="mx-10"
            />
            {/* Brand 2 */}
            <Image
                src="/brands/brand-2.svg"
                alt="Brand 2"
                width={180}
                height={40}
                className="mx-10"
            />
            {/* Brand 3 */}
            <Image
                src="/brands/brand-3.svg"
                alt="Brand 3"
                width={180}
                height={40}
                className="mx-10"
            />
            {/* Brand 4 */}
            <Image
                src="/brands/brand-4.svg"
                alt="Brand 4"
                width={180}
                height={40}
                className="mx-10"
            />
            {/* Brand 5 */}
            <Image
                src="/brands/brand-5.svg"
                alt="Brand 5"
                width={180}
                height={40}
                className="mx-10"
            />
            {/* Brand 6 */}
            <Image
                src="/brands/brand-6.svg"
                alt="Brand 6"
                width={180}
                height={40}
                className="mx-10"
            />
        </Marquee>
    )
}

export default BrandsMarquee;