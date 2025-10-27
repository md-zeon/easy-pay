import Image from "next/image"
import StepCard from "./cards/StepCard"
import { Button } from "./ui/button"

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="px-4 py-32 bg-[#F6F6F6]">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex mb-12">
                    <div className="flex-1">
                        <h2 className="text-[#932EFA] uppercase text-sm font-bold">How It Works</h2>
                        <h1 className="text-4xl font-bold mt-4">
                            Make payments, transfers, and <br />
                            more in 3 simple steps
                        </h1>
                    </div>

                    <Button size="lg" className="rounded-full self-end">Get Started Now</Button>
                </div>
                {/* How It Works Steps */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-14 mb-20 bg-white rounded-2xl p-6">
                    {/* Step 1 */}
                    <StepCard
                        imgUrl="/icons/step-1.svg"
                        title="Download Easy Pay"
                        description="Get the Easy Pay app today from the App Store or Google Play hassle free."
                    />
                    <div className="w-32 md:w-0.5 h-0.5 md:h-32 bg-linear-to-b from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]" />
                    {/* Step 2 */}
                    <StepCard
                        imgUrl="/icons/step-2.svg"
                        title="Link your bank or card"
                        description="Easily connect your account in seconds with advanced security for peace of mind."
                    />
                    <div className="w-32 md:w-0.5 h-0.5 md:h-32 bg-linear-to-b from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]" />
                    {/* Step 3 */}
                    <StepCard
                        imgUrl="/icons/step-3.svg"
                        title="Start using Easy Pay"
                        description="Easily split bills, send money to friends, and make smooth online payments instantly."
                    />
                </div>
                {/* Image */}
                <Image
                    src="/images/man-using-laptop-coffee-shop.png"
                    alt="Man using laptop in coffee shop"
                    width={1170}
                    height={660}
                    className="w-full h-auto rounded-2xl"
                />
            </div>
        </section>
    )
}

export default HowItWorks