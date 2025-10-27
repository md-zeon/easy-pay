import Image from "next/image"

interface StepCardProps {
    imgUrl: string;
    title: string;
    description: string;
}

const StepCard = ({ imgUrl, title, description }: StepCardProps) => {
    return (
        <div className="px-6 grid grid-cols-1 gap-6 pb-6 md:max-w-72">
            <Image
                src={imgUrl}
                alt={title}
                width={95}
                height={95}
                className="size-24"
            />
            <div className="mt-auto space-y-2">
                <h3 className="text-xl font-semibold mt-4">{title}</h3>
                <p className="text-sm text-[#4D525F]">{description}</p>
            </div>
        </div>
    )
}

export default StepCard