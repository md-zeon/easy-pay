import { Star } from "lucide-react";
import Image from "next/image";

export interface TestimonialItem {
    name: string;
    role: string;
    authorImage?: string;
    content: string;
    rating: number;
}

interface TestimonialCardProps {
    testimonial: TestimonialItem;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
    return (
        <div className="bg-white rounded-2xl p-8 h-full min-h-72 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
            {/* Stars */}
            <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 text-lg fill-yellow-400" />
                ))}
            </div>

            {/* Testimonial Content */}
            <p className="flex-1 text-gray-700 text-base leading-relaxed grow max-w-md">
                {testimonial.content}
            </p>

            {/* Author */}
            <div className="mt-6 flex items-center gap-4">
                {testimonial.authorImage ? (
                    <Image
                        src={testimonial.authorImage}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-12 h-12 bg-gray-200 border-2 border-dashed rounded-full" />
                )}
                <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;