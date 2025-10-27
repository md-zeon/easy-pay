import FeatureCard from "./cards/FeatureCard"

const Features = () => {
    return (
        <section id="features" className='max-w-[1440px] mx-auto'>
            <h2 className='text-center text-[#932EFA] uppercase text-sm font-bold'>Features</h2>
            <h1 className='text-4xl font-bold text-center mb-12 mt-4'>
                Why choose Easy Pay for <br />
                effortless payments?
            </h1>
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mb-20">
                {/* Feature 1 */}
                <FeatureCard
                    iconSrc="/icons/feature1.svg"
                    title="Instant payments"
                    description="Send money to friends or family in real-time, for free."
                    otherClasses="bg-[#F3F7FF]"
                />
                {/* Feature 2 */}
                <FeatureCard
                    iconSrc="/icons/feature2.svg"
                    title="No hidden fees"
                    description="Clear and simple pricing. Always be aware of your costs."
                    otherClasses="bg-[#FBF6EF]"
                />
                {/* Feature 3 */}
                <FeatureCard
                    iconSrc="/icons/feature3.svg"
                    title="Digital wallet"
                    description="Store money securely and make fast transfers or purchases."
                    otherClasses="bg-[#EEF9FE]"
                />
                {/* Feature 4 */}
                <FeatureCard
                    iconSrc="/icons/feature4.svg"
                    title="Secure transactions"
                    description="End-to-end encryption for all transactions."
                    otherClasses="bg-[#F4EDFC]"
                />
            </div>

            {/* Brand Logos */}
        </section>
    )
}

export default Features