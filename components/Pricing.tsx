import PriceCard from "./cards/PriceCard"

const Pricing = () => {
    return (
        <section id="pricing" className='max-w-[1440px] mx-auto'>
            <h2 className='text-center text-[#932EFA] uppercase text-sm font-bold'>Pricing</h2>
            <h1 className='text-4xl font-bold text-center mb-12 mt-4'>
                Simple transparent pricing
                <br />
                no hidden fees
            </h1>

            <div className="grid md:grid-cols-3 gap-8 items-center justify-center">
                <PriceCard
                    title="Free Plan"
                    subtitle="Free for personal payments."
                    price="$0"
                    features={[
                        "Up to 100 transactions per month",
                        "Basic fraud protection",
                        "Email support",
                    ]}
                    buttonText="Get Free Plan"
                />
                <PriceCard
                    title="Advanced"
                    subtitle="Minimal fees for advanced transactions"
                    price="$19"
                    features={[
                        "Up to 1000 transactions per month",
                        "Advanced fraud protection",
                        "Detailed transaction reports",
                        "Priority email & chat support",
                    ]}
                    buttonText="Get Advanced Plan"
                    highlighted
                />
                <PriceCard
                    title="Business"
                    subtitle="Premium business transactions"
                    price="$29"
                    features={[
                        "Unlimited transactions per month",
                        "Premium fraud protection",
                        "Detailed transaction reports",
                        "Priority email & chat support",
                    ]}
                    buttonText="Get Business Plan"
                />
            </div>
        </section>
    )
}

export default Pricing