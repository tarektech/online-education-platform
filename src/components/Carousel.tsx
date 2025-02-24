'use client';
import { memo, useMemo } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { testimonials } from '@/components/home/Testimonials';
import Image from './Image';

// Memoize the CarouselCard component to prevent unnecessary re-renders
const CarouselCard = memo(function CarouselCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <>
      <div className=" flex flex-col justify-between">
        <div className="p-6 md:p-8 lg:p-10">
          <p className="text-sm md:text-base lg:text-lg">{testimonial.title}</p>
        </div>
        <div className="flex items-center justify-between px-6 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6 bg-white">
          <div className="flex items-center gap-3">
            <Image
              path={testimonial.image}
              alt="testimonial"
              className="w-10 h-10 md:w-12 md:h-12"
              width={100}
              height={100}
            />
            <p className="text-sm md:text-base">{testimonial.name}</p>
          </div>
          <div>
            <button className="text-sm md:text-base">Read Full story</button>
          </div>
        </div>
      </div>
    </>
  );
});

export default function CarouselSection() {
  const carouselItems = useMemo(() => {
    return testimonials.map((testimonial, index) => (
      <CarouselItem key={testimonial.id || index}>
        <CarouselCard testimonial={testimonial} />
      </CarouselItem>
    ));
  }, []);

  return (
    <section className="w-[70%] md:w-[95%]  mx-auto py-16 ">
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-2 px-8">
          <h1>Students Testimonials</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div>
          <Carousel>
            <CarouselContent>{carouselItems}</CarouselContent>
            <CarouselPrevious className="hidden md:flex justify-center items-center absolute  md:left-0 md:top-12 md:-translate-y-1/2" />
            <CarouselNext className="hidden md:flex justify-center items-center absolute md:right-0 md:top-12 md:-translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
