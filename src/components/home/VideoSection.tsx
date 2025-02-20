import Image from '../Image';

export default function VideoSection() {
  return (
    <section className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto ">
      <div className="flex items-center justify-center">
        <Image
          path="/online-education-website/images/VideoImage.png"
          alt="Two people collaborating and looking at a mobile device"
          width={1200}
          height={800}
          className="rounded-lg shadow-lg w-full max-w-6xl"
          priority
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
