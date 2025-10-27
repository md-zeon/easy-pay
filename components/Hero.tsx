import { CheckCircleIcon, TrendingUp } from 'lucide-react'
import StoreButton from './button/StoreButton'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className='relative overflow-hidden'>
            <div className='grid grid-cols-1 sm:grid-cols-2 px-4 pt-28 max-w-[1440px] mx-auto'>
                {/* Left Content */}
                <article>
                    <h3 className='text-[#787878] uppercase font-semibold mb-2'>EASY PAYMENT</h3>
                    <h1 className="mt-2 text-4xl text-black md:text-5xl font-bold leading-tight">
                        <span className="relative inline-block">
                            Pay fast and smarter
                            <span className="absolute -bottom-1 sm:-bottom-3 right-1/4 translate-x-1/2 lg:-right-10 lg:translate-x-0 w-[200px] sm:w-[280px] lg:w-[400px]">
                                <Image
                                    src="/icons/underline.svg"
                                    alt="underline vector"
                                    width={200}
                                    height={200}
                                    className="w-96"
                                />
                            </span>
                        </span>

                        from anywhere
                    </h1>
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
                    <div className='relative'>
                        <Image src="/images/hero-image.png" alt="Hero Image" width={500} height={500} />
                        {/* Card 1 */}
                        <div className='p-5 rounded-lg bg-white w-56 shadow-lg absolute bottom-10 -left-10'>
                            <h4 className='font-semibold'>Payment Received</h4>
                            <p className='text-[#2E68FD]'>+35,890.00</p>
                            <div className='flex justify-between mt-2 gap-2 text-sm'>
                                <span className='text-[#4D525F]'>1st Jan, 2025</span>
                                <span className='text-green-500'>
                                    3.09% <TrendingUp className='inline-block ml-1' size={16} />
                                </span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className='flex justify-between items-center p-5 rounded-lg bg-white w-max shadow-lg absolute top-40 right-12'>
                            <Image
                                src="/images/avatars.png"
                                alt='Avatars'
                                width={96}
                                height={40}
                            />
                            <div>
                                <h4 className='font-semibold'>120K+</h4>
                                <p className='text-sm text-[#4D525F]'>Active Users</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            {/* Background Image */}
            <Image src="/images/Hero-bg.svg" alt="Hero Background" className='-z-30 w-full h-full object-cover object-center' priority fill />
        </section>
    )
}

export default Hero