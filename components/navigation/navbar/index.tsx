import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <Image
          src="/icons/logo.png"
          width={30}
          height={30}
          alt="Easy Pay Logo"
        />
      </Link>
    </nav>
  )
}

export default Navbar