import { Check } from "lucide-react";
import React from "react";

interface PriceCardProps {
    title: string;
    subtitle?: string;
    price: string;
    period?: string;
    features: string[];
    buttonText: string;
    highlighted?: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({
    title,
    subtitle,
    price,
    period = "/month",
    features,
    buttonText,
    highlighted = false,
}) => {
    return (
        <div
            className={`rounded-2xl p-8 w-full max-w-sm border transition-all duration-300
      ${highlighted
                    ? "bg-[#0E0E10] text-white border-transparent shadow-xl scale-105"
                    : "bg-white text-gray-900 border-gray-200 hover:shadow-md"
                }`}
        >
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}
            <div className="text-4xl font-bold mb-6">
                {price}
                <span className="text-base font-normal text-gray-500">{period}</span>
            </div>

            <ul className="space-y-3 mb-8">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                        <Check className={`w-5 h-5 ${highlighted ? "text-blue-400" : "text-blue-600"}`} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <button
                className={`w-full py-3 rounded-full font-medium transition
        ${highlighted
                        ? "bg-blue-600 text-white hover:bg-blue-500"
                        : "border border-gray-300 hover:bg-gray-100"
                    }`}
            >
                {buttonText}
            </button>
        </div>
    );
};

export default PriceCard;
