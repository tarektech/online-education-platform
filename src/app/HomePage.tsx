import { lazy } from 'react';   

const Hero = lazy(() => import('@/components/home/Hero'));
const BrandLogoSection = lazy(
  () => import('@/components/home/BrandLogoSection')
);
const VideoSection = lazy(() => import('@/components/home/VideoSection'));
const BenefitsSection = lazy(() => import('@/components/home/BenefitsSection'));
const OurCoursesSection = lazy(
  () => import('@/components/home/OurCoursesSection')
);
const Testimonials = lazy(() => import('@/components/home/Testimonials'));
const Pricing = lazy(() => import('@/components/shared/Pricing'));
const FrequentlyQuestionSection = lazy(
  () => import('@/components/shared/FrequentlyQuestionSection')
);


export default function HomePage  () {
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
    )
}
