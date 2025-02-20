import BrandLogoSection from '@/components/home/BrandLogoSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import Hero from '@/components/home/Hero';
import VideoSection from '@/components/home/VideoSection';
import OurCoursesSection from '@/components/home/OurCoursesSection';
import Testimonials from '@/components/home/Testimonials';
export default function Home() {
  return (
    <div className="bg-light-97">
      <Hero />
      <BrandLogoSection />
      <VideoSection />
      <BenefitsSection />
      <OurCoursesSection />
      <Testimonials />
    </div>
  );
}
