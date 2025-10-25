import Image from "next/image"
import { Button } from "../ui/button"

interface StoreButtonProps {
    src: string;
    title: string;
    subtitle: string;
}

const StoreButton = ({ src, title, subtitle }: StoreButtonProps) => {
    return (
        <Button className='py-2.5 px-2 w-max h-fit rounded-lg bg-foreground text-background'>
            <div className="flex gap-2.5 items-center justify-between font-medium">
                <Image src={src} alt={title} width={26} height={26} />
                <div className='font-sf-compact-display'>
                    <p className='text-xs text-start'>{subtitle}</p>
                    <h2 className='text-xl mr-2'>{title}</h2>
                </div>
            </div>
        </Button>
    )
}

export default StoreButton