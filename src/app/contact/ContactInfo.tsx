'use client';

import {
  Contact,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4   w-full max-w-md mx-auto py-4 md:py-8">
      <div className="flex gap-3 md:gap-4 flex-col items-center bg-white p-4 md:p-6 rounded-lg">
        <Contact />
        <Link
          href="mailto:support@skillbridge.com"
          className="text-base text-center"
        >
          support@skillbridge.com
        </Link>
      </div>
      <div className="flex gap-3 md:gap-4 flex-col items-center bg-white p-4 md:p-6 lg:p-8 rounded-lg">
        <Phone />
        <Link href="tel:+910000000000" className="text-base">
          +91 00000 00000
        </Link>
      </div>
      <div className="flex gap-3 md:gap-4 flex-col items-center bg-white p-4 md:p-6 lg:p-8 rounded-lg">
        <MapPin />
        <Link href="#" className="text-base text-center">
          Some Where in the World
        </Link>
      </div>
      <div className="flex gap-3 md:gap-4 flex-col items-center bg-white p-4 md:p-6 ">
        <div className="flex gap-3 md:gap-4 ">
          <Facebook className="w-5 h-5 md:w-6 md:h-6" />
          <Twitter className="w-5 h-5 md:w-6 md:h-6" />
          <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <p className="text-base">Social Profiles</p>
      </div>
    </div>
  );
}
