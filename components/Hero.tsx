import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Hero = () => {
    return (
        <section>
            {/* Left Content */}
            <div>
                <h3>EASY PAYMENT</h3>
                <div>
                    <h1>Pay fast and smarter from anywhere</h1>
                </div>
                <p>Experience the future of payments: fast, secure, and tailored for the next generation&apos;s convenience and trust.</p>
                {/* Buttons */}
                <div>
                    <button className='flex gap-2.5 items-center py-2.5 px-2 rounded bg-foreground text-background'>
                        <Image src="/icons/apple-store.svg" alt="Apple Store" width={24} height={24} />
                        <div className='flex items-center flex-col justify-center'>
                            <p className='font-medium'>Download on the</p>
                            <h2 className='font-bold'>App Store</h2>
                        </div>
                    </button>
                </div>
            </div>
            {/* Right Content */}
            <div>
                <Image src="/images/hero-image.png" alt="Hero Image" width={500} height={500} />
            </div>
        </section>
    )
}

export default Hero