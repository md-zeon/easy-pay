import { Button } from "./ui/button"

const CTA = () => {
    return (
        <section className="relative max-w-[1440px] mx-auto px-4 py-24 bg-[url('/images/cta-bg.png')] bg-cover bg-center flex flex-col items-center gap-8 text-center h-full rounded-xl overflow-hidden mb-10">
            <div className="max-w-xl text-white z-10">
                <h1 className="text-4xl font-semibold mb-3">Ready to experience seamless secure payments globally</h1>
                <p>Ready for hassle-free, secure payments anywhere in the world? Start using Monks Pay today it&apos;s fast, free, and focused on keeping your transactions secure!</p>
                {/* Buttons */}
                <div className="flex justify-center items-center mt-10 gap-4">
                    <Button className="rounded-full py-3">Download the App</Button>
                    <Button variant="outline" className="rounded-full py-3 bg-transparent">Get Started Now</Button>
                </div>
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-70"></div>
        </section>
    )
}

export default CTA