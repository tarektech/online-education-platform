import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
export default function Hero() {
  return (
    <section className="py-12 md:py-20 bg-light-97">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-center gap-2 text-xl md:text-2xl text-center md:text-left">
            <div className="bg-orange-95 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 md:size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold">
              <span className="text-orange-50">Unlock</span> Your Creative
              Potential
            </h1>
          </div>
          <div className="flex flex-col items-center gap-1 mt-4 md:mt-[20px] mb-8 md:mb-[60px] text-center">
            <p className="text-xl md:text-2xl font-semibold px-4">
              with Online Design and Development Courses.
            </p>
            <p className="text-xs font-semibold px-4">
              Learn from Industry Experts and Enhance Your Skills.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2">
            <Button
              className="bg-orange-500 text-white w-full sm:w-auto"
              asChild
            >
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button
              className="bg-white text-black shadow-none hover:bg-orange-500 hover:text-white w-full sm:w-auto"
              asChild
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
