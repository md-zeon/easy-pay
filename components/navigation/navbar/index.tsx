import { Button } from "@/components/ui/button"
import ROUTES from "@/constants/routes"
import Image from "next/image"
import Link from "next/link"
import NavLinks from "./NavLinks"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-2 px-4">
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
      <NavLinks />
      {/* Right Button */}
      <Link
        href={ROUTES.CONTACT}
        className="text-sm font-medium"
      >
        <Button className="btn bg-primary rounded-full text-white px-6 hover:bg-transparent hover:text-primary border border-primary transition">
          Contact Us
        </Button>
      </Link>
    </nav>
  )
}

export default Navbar