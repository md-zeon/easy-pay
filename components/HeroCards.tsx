"use client"
import { motion } from 'motion/react'
import { TrendingUp } from 'lucide-react'
import Image from 'next/image'

const HeroCards = () => {
    return (
        <>
            {/* Card 1 */}
            <motion.div
                className='p-5 rounded-lg bg-background w-56 shadow-lg absolute bottom-10 -sm:left-10 animate-float'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h4 className='font-semibold'>Payment Received</h4>
                <p className='text-[#2E68FD]'>+35,890.00</p>
                <div className='flex justify-between mt-2 gap-2 text-sm'>
                    <span className='text-[#4D525F]'>1st Jan, 2025</span>
                    <span className='text-green-500'>
                        3.09% <TrendingUp className='inline-block ml-1' size={16} />
                    </span>
                </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
                className='flex justify-between items-center p-5 rounded-lg bg-background w-max shadow-lg absolute lg:top-40 top-10 right-3 md:right-12'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
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
            </motion.div>
        </>
    )
}

export default HeroCards
