"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import logo from "../public/images/Logo.png";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-green-950 bg-opacity-70" : "bg-green-950 "
      } p-4 rounded-b-lg shadow-lg h-20 flex justify-between items-center fixed top-0 w-full z-50 px-6 transition duration-300`}
    >
      {/* Logo */}
      <div className="flex items-center px-6">
        <Image
          src={logo}
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex list-none gap-10 m-0 p-0 text-lg pr-12">
        {[
          { href: "/", label: "Home" },
          { href: "/discussions", label: "Discussions" },
          { href: "/articles", label: "Articles" },
          { href: "/waste-management", label: "Waste Management" },
          { href: "/about", label: "About Us" },
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

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="text-white focus:outline-none"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <ul className="absolute top-20 left-0 bg-green-950 w-full flex flex-col gap-5 p-5 text-lg md:hidden shadow-lg">
          {[
            { href: "/", label: "Home" },
            { href: "/discussions", label: "Discussions" },
            { href: "/articles", label: "Articles" },
            { href: "/waste-management", label: "Waste Management" },
            { href: "/about", label: "About Us" },
          ].map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)} // Close menu on link click
                className={`${
                  pathname === link.href
                    ? "text-green-500"
                    : "text-white hover:text-gray-300"
                } font-bold transition duration-300 ease-in-out`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
