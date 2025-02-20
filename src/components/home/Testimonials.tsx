import Image from '../Image';

const testimonials = [
  {
    id: 1,
    title:
      'The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!',
    image: '/online-education-website/images/testimonials/SaraL.png',
    name: 'Sara L.',
  },
  {
    id: 2,
    title:
      "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    image: '/online-education-website/images/testimonials/JasonM.png',
    name: 'Jason M.',
  },
  {
    id: 3,
    title:
      "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
    image: '/online-education-website/images/testimonials/EmilyR.png',
    name: 'Emily R.',
  },
  {
    id: 4,
    title:
      "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
    image: '/online-education-website/images/testimonials/MichalK.png',
    name: 'Michael K.',
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="min-h-[180px] md:min-h-[300px] lg:min-h-[350px] flex flex-col justify-between">
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
  );
}

export default function Testimonials() {
  return (
    <section className="grid gap-20 w-[90%] md:w-[85%] lg:w-[80%] mx-auto py-16 ">
      {/* text section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-10">
        <div className="flex flex-col gap-4">
          <h3>Our Testimonials</h3>
          <p className="pr-4 md:pr-10">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <p className="whitespace-nowrap text-sm md:text-base">View All</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
