import { CheckCircleIcon } from 'lucide-react'
import StoreButton from './button/StoreButton'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className='relative'>
            <div className='grid grid-cols-1 sm:grid-cols-2 px-4 pt-28 max-w-[1440px] mx-auto'>
                {/* Left Content */}
                <article>
                    <h3 className='text-[#787878] uppercase font-semibold mb-2'>EASY PAYMENT</h3>
                    <div>
                        <h1 className='text-[#01081B] text-5xl font-semibold leading-tight'>Pay fast and smarter <br /> from anywhere</h1>
                        <Image src="/icons/underline.svg"
                            width={350}
                            height={12}
                            alt="Underline"
                            className='relative bottom-16 -right-20'
                        />
                    </div>
                    <p className='mt-2.5 mb-6'>Experience the future of payments: fast, secure, and tailored for the next generation&apos;s convenience and trust.</p>
                    {/* Buttons */}
                    <div className='flex gap-2 items-center'>
                        <StoreButton
                            src='/icons/apple-store.svg'
                            title='App Store'
                            subtitle='Download on the'
                        />
                        <StoreButton
                            src='/icons/google-play.svg'
                            title='Google Play'
                            subtitle='GET IT ON'
                        />
                    </div>
                    <div className='flex gap-2 items-center mt-3'>
                        <span>
                            <CheckCircleIcon className='inline-block mr-2' size={20} />
                            No Card required
                        </span>
                        <span>
                            <CheckCircleIcon className='inline-block mr-2' size={20} />
                            Fast acceptance
                        </span>
                    </div>
                </article>
                {/* Right Content */}
                <article>
                    <Image src="/images/hero-image.png" alt="Hero Image" width={500} height={500} />
                </article>
            </div>
            <Image src="/images/hero-bg.png" alt="Hero Background" layout="fill" objectFit="cover" className='-z-30 w-full h-full ' />
        </section>
    )
}

export default Hero