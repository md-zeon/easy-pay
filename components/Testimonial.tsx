"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import TestimonialCard, { TestimonialItem } from "./cards/TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials: TestimonialItem[] = [
    {
        name: "Sarah Ahmed",
        role: "Digital Marketer",
        content:
            "I’ve tried many payment platforms, but this one feels the most intuitive. The design is clean, and I can complete transactions in seconds without any confusion.",
        rating: 5,
    },
    {
        name: "Arjun Mehta",
        role: "Freelance Developer",
        content:
            "As a freelancer, I depend on fast payments. This platform gives me confidence — my clients pay instantly, and I can track everything effortlessly.",
        rating: 5,
        authorImage: "/images/user-1.png",
    },
    {
        name: "Elena Brooks",
        role: "Startup CEO",
        content:
            "We’ve scaled quickly thanks to the reliability of this payment gateway. It’s stable, secure, and integrates beautifully with our product ecosystem.",
        rating: 5,
    },
    {
        name: "David Kim",
        role: "Finance Officer",
        content:
            "Managing multiple transactions is now a breeze. The analytics dashboard gives clear insights, and everything just works without downtime.",
        rating: 5,
        authorImage: "/images/user-2.png",
    },
    {
        name: "Lina Fernandez",
        role: "Content Creator",
        content:
            "Finally, a payment solution that understands creators! I can focus on my content knowing payments will always arrive smoothly and transparently.",
        rating: 5,
    },
    {
        name: "Ethan Williams",
        role: "Software Engineer",
        content:
            "The interface is sleek, and the performance is unmatched. I’ve even recommended it to my team for our SaaS product — it’s developer-friendly and robust.",
        rating: 5,
        authorImage: "/images/user-3.png",
    },
    {
        name: "Hannah Lee",
        role: "Product Designer",
        content:
            "Everything about this platform feels well-thought-out. From the flow to the clarity of each step, it’s a perfect balance of design and functionality.",
        rating: 5,
    },
    {
        name: "Marcus Allen",
        role: "E-commerce Owner",
        content:
            "Switching to this platform cut my payment processing time by half. My customers love it, and my accounting team says it's the easiest system we’ve used.",
        rating: 5,
        authorImage: "/images/user-4.png",
    },
];

export default function Testimonial() {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <section className="py-16 sm:py-32 bg-[#F6F6F6]">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                {/* Header Section */}
                <div className="text-left">
                    <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
                        Testimonial
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                        We&apos;ve built trust with reviews from real users
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl">
                        Boost your credibility by featuring genuine testimonials from real
                        users, showcasing their positive experiences and satisfaction with
                        Monks Pay services.
                    </p>

                    {/* Navigation Buttons */}
                    <div className="flex justify-start gap-3 mt-6">
                        <button
                            ref={prevRef}
                            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>

                        <button
                            ref={nextRef}
                            className="w-12 h-12 rounded-full bg-black shadow-md flex items-center justify-center hover:bg-gray-800 transition"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>

                {/* Swiper Section */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 1.1 },
                            1024: { slidesPerView: 1.5 },
                        }}
                        loop
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        onInit={(swiper) => {
                            if (
                                swiper.params.navigation &&
                                typeof swiper.params.navigation !== "boolean"
                            ) {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard testimonial={testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
