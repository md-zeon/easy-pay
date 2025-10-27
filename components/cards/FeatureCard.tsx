import { cn } from "@/lib/utils";
import Image from "next/image"

interface FeatureCardProps {
    iconSrc: string;
    title: string;
    description: string;
    otherClasses?: string;
}

const FeatureCard = ({ iconSrc, title, description, otherClasses }: FeatureCardProps) => {
    return (
        <div className={cn("p-8 rounded-lg text-center", otherClasses)}>
            {/* Icon */}
            <Image
                src={iconSrc}
                alt={title}
                width={60}
                height={60}
                className="mx-auto"
            />
            {/* Title */}
            <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
            {/* Description */}
            <p className="text-gray-600">{description}</p>
        </div>
    )
}

export default FeatureCard