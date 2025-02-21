import BrandLogoSection from '@/components/home/BrandLogoSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import Hero from '@/components/home/Hero';
import VideoSection from '@/components/home/VideoSection';
import OurCoursesSection from '@/components/home/OurCoursesSection';
import Testimonials from '@/components/home/Testimonials';
import Pricing from '@/components/shared/Pricing';
import FrequentlyQuestionSection from '@/components/shared/FrequentlyQuestionSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SkillBridge',
  description: 'SkillBridge is a platform that helps you learn new skills and get paid for them.',
};


export default function Home() {
  return (
    <div className="bg-light-97">
      <Hero />
      <BrandLogoSection />
      <VideoSection />
      <BenefitsSection />
      <OurCoursesSection />
      <Testimonials />
      <Pricing
        title="Our Pricing"
        description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
      />
      <FrequentlyQuestionSection />
    </div>
  );
}
