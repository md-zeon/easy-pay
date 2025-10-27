import { Button } from "@/components/ui/button"
import ROUTES from "@/constants/routes"
import Image from "next/image"
import Link from "next/link"
import NavLinks from "./NavLinks"
import MobileNavigation from "./MobileNavigation"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-2 px-4 font-inter max-w-[1440px] mx-auto fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      {/* Left Logo */}
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={41}
          height={50}
          className="object-contain"
          alt="Easy Pay Logo"
        />
        <h2 className="font-bold text-2xl">Easy Pay</h2>
      </Link>
      {/* Middle Links */}
      <div className="hidden sm:block">
        <NavLinks />
      </div>
      {/* Right Button */}
      <Link
        href={ROUTES.CONTACT}
        className="text-sm font-medium sm:block hidden"
      >
        <Button className="btn bg-[#2E68FD] hover:bg-[#2E68FD] cursor-pointer min-h-12 outline-none border-none py-3 rounded-full text-white px-6">
          Contact Us
        </Button>
      </Link>

      {/* Mobile Navigation */}
      <div className="sm:hidden">
        <MobileNavigation />
      </div>
    </nav>
  )
}

export default Navbar