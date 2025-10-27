import FeatureCard from "./cards/FeatureCard"

const Benefits = () => {
    return (
        <section id="benefits" className='max-w-[1440px] mx-auto py-16'>
            <h2 className='text-center text-[#932EFA] uppercase text-sm font-bold'>Benefits</h2>
            <h1 className='text-4xl font-bold text-center mb-12 mt-4'>
                The advantages of using <br />
                Easy Pay
            </h1>
            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mb-20">
                {/* Benefit 1 */}
                <FeatureCard
                    iconSrc="/icons/benefit1.svg"
                    title="Save Money"
                    description="No transaction fees, no hidden charges. Keep more of your money."
                    otherClasses="bg-[#F3F7FF]"
                />
                {/* Benefit 2 */}
                <FeatureCard
                    iconSrc="/icons/benefit2.svg"
                    title="Save Time"
                    description="Instant transfers and quick setup. Get things done faster."
                    otherClasses="bg-[#FBF6EF]"
                />
                {/* Benefit 3 */}
                <FeatureCard
                    iconSrc="/icons/benefit3.svg"
                    title="Global Access"
                    description="Send money anywhere in the world with ease and convenience."
                    otherClasses="bg-[#EEF9FE]"
                />
                {/* Benefit 4 */}
                <FeatureCard
                    iconSrc="/icons/benefit4.svg"
                    title="24/7 Support"
                    description="Get help whenever you need it with our dedicated support team."
                    otherClasses="bg-[#F4EDFC]"
                />
            </div>
        </section>
    )
}

export default Benefits
