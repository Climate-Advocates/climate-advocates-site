"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/Logo.png";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 bg-opacity-70 p-4 rounded-b-lg shadow-lg h-20 flex justify-center items-center gap-5 fixed top-0 w-full z-50">
      {/* Logo */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2">
        <Image
          src={logo}
          alt="Logo"
          width={70}
          height={70}
          className="rounded-full"
        />
      </div>
      {/* Navigation Links */}
      <ul className="flex list-none gap-14 m-0 p-0 text-lg">
        {[
          { href: "/", label: "Home" },
          { href: "/pages/about", label: "Discussions" },
          { href: "/pages/contact", label: "Articles" },
          { href: "/pages/contact", label: "Waste Management" },
          { href: "/pages/contact", label: "About Us" },
        ].map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-green-500"
                  : "text-white hover:text-gray-300"
              } font-bold transition duration-300 ease-in-out transform hover:scale-110`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
