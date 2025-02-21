'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from '../Image';
import { usePathname } from 'next/navigation';

const links = [
  {
    id: 1,
    label: 'Home',
    href: '/',
  },
  {
    id: 2,
    label: 'Courses',
    href: '/courses',
  },
  {
    id: 3,
    label: 'About Us',
    href: '/about',
  },
  {
    id: 4,
    label: 'Pricing',
    href: '/pricing',
  },
  {
    id: 5,
    label: 'Contact',
    href: '/contact',
  },
];

const authLinks = [
  {
    id: 1,
    label: 'Sign Up',
    href: '/signup',
  },
  {
    id: 2,
    label: 'Login',
    href: '/login',
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  return (
    <div className="sticky mt-5 z-50 max-w-7xl mx-auto px-4 py-4 ">
      {/* Top Banner */}
      <div className="bg-orange-500 text-white py-2 px-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm sm:text-xl">
            Free Courses ⭐ Sale Ends Soon, Get It Now
          </span>
          <span className="text-xl">→</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              path="/online-education-website/images/logo/Logo-Desktop.png"
              alt="logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8 justify-between w-full ">
            <ul className="hidden lg:flex gap-8">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={`text-gray-700 px-4 py-2 whitespace-nowrap ${
                      pathname === link.href ? 'bg-light-95' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Auth Links */}
            <ul className="flex items-center gap-4 ml-auto">
              {authLinks.map((authLink) => (
                <li key={authLink.id}>
                  <Link
                    href={authLink.href}
                    className={`px-4 py-2 rounded whitespace-nowrap ${
                      authLink.label === 'Sign Up'
                        ? 'text-gray-700'
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                  >
                    {authLink.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="transition-transform duration-300"
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 transition-transform duration-300 rotate-90"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 transition-transform duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>

              <div
                className={`absolute top-32 right-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform origin-top
                  ${
                    isMobileMenuOpen
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-5 pointer-events-none'
                  }`}
              >
                <ul className="flex flex-col gap-4 p-4">
                  {links.map((link) => (
                    <li
                      key={link.id}
                      className={` transform transition-all duration-300 md:hover:translate-x-2 `}
                    >
                      <Link
                        href={link.href}
                        className={`text-gray-700 px-4 py-2 rounded hover:text-gray-900 ${
                          pathname === link.href
                            ? 'text-orange-500 bg-light-95'
                            : ''
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
