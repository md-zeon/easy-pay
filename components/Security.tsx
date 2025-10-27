import SecurityCard from "./cards/SecurityCard"

const securityFeatures = [
    { title: "Two-factor authentication", description: "Two-factor authentication ensures added protection by using verification steps.", iconColor: "bg-blue-600", iconBackground: "bg-blue-400" },
    { title: "Fraud detection and alerts", description: "Fraud detection safeguards your money, sending instant alerts for any activity.", iconColor: "bg-red-600", iconBackground: "bg-red-100" },
    { title: "Transaction notifications", description: "Instant notifications for transactions keep you informed to manage your finances.", iconColor: "bg-green-600", iconBackground: "bg-green-100" },
    { title: "Biometric access", description: "Easily and securely log in with biometric features, and facial recognition.", iconColor: "bg-teal-600", iconBackground: "bg-teal-100" },
    { title: "End-to-end encryption", description: "By encryption, protecting your data from unauthorized access.", iconColor: "bg-orange-600", iconBackground: "bg-orange-100" },
    { title: "24/7 Protection support", description: "Our dedicated team is available around the clock to help you.", iconColor: "bg-purple-600", iconBackground: "bg-purple-100" }
];

const Security = () => {
    return (
        <section id="security" className='px-4 max-w-[1440px] mx-auto'>
            <h2 className="text-[#932EFA] uppercase text-sm font-bold mb-4">SECURITY</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
                <h1 className="text-4xl font-bold w-xl">
                    We protect your money at every step with Easy Pay
                </h1>
                <p className="text-[#4D525F] w-xl md:w-md">
                    Easy Pay ensures your money is protected at every step with advanced encryption, real-time monitoring, and multi-factor authentication.
                </p>
            </div>

            {/* Security Features */}

            <div className="p-10  rounded-xl bg-[#F6F6F6] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
                {securityFeatures.map((feature, index) => (
                    <SecurityCard
                        key={feature.title}
                        title={feature.title}
                        description={feature.description}
                        iconColor={feature.iconColor}
                        iconBackground={feature.iconBackground}
                        separator={(index !== 2 && index !== 5) ? true : false}
                    />
                ))}
            </div>
        </section>
    )
}

export default Security