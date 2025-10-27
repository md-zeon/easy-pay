import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import NavLinks from "./NavLinks";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const MobileNavigation = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Image
                    src="/icons/hamburger.svg"
                    alt="Menu"
                    width={36}
                    height={36}
                    className="inverted-colors: invert"
                />
            </SheetTrigger>
            <SheetContent
                side="left"
                className="bg-background border-none p-6"
            >
                <SheetTitle className="hidden">Navigation</SheetTitle>
                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/icons/logo.svg"
                        width={36}
                        height={36}
                        alt="Logo"
                    />
                    <p className="text-2xl font-bold">
                        Easy Pay
                    </p>
                </Link>
                <div className="flex h-[calc(100vh-80px)] flex-col justify-between">
                    <SheetClose asChild>
                        <section className="flex h-full flex-col gap-6 pt-16">
                            <NavLinks isMobileNav />
                        </section>
                    </SheetClose>
                    <div className="flex flex-col gap-3">
                        <SheetClose asChild>
                            <Link
                                href="/contact"
                                className="text-sm font-medium"
                            >
                                <Button className="btn bg-primary rounded-full text-white px-6 hover:bg-transparent hover:text-primary border border-primary transition w-full">
                                    Contact Us
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavigation