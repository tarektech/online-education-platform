'use client';
import Link from 'next/link';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Image from '../Image';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Home',
    links: [
      { label: 'Benefits', href: '/benefits' },
      { label: 'Our Courses', href: '/courses' },
      { label: 'Our Testimonials', href: '/testimonials' },
      { label: 'Our FAQ', href: '/faq' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { label: 'Company', href: '/company' },
      { label: 'Achievements', href: '/achievements' },
      { label: 'Our Goals', href: '/goals' },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid justify-items-center text-center grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                path="/online-education-website/images/logo/Logo-Desktop.png"
                alt="Skillbridge Logo"
                width={80}
                height={80}
                className=" p-2 rounded-lg"
              />
            </Link>
            <div className="space-y-4">
              <a
                href="mailto:hello@skillbridge.com"
                className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
              >
                <span className="mr-2">✉</span>
                hello@skillbridge.com
              </a>
              <a
                href="tel:+919181323209"
                className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
              >
                <span className="mr-2">📞</span>
                +91 91813 23209
              </a>
              <p className="flex items-center text-gray-600">
                <span className="mr-2">📍</span>
                Somewhere in the World
              </p>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-gray-900 font-semibold mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6">
              Social Profiles
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-600" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-center">
            © {new Date().getFullYear()} Skillbridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
