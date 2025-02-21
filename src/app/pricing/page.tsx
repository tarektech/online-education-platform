import FrequentlyQuestionSection from '@/components/shared/FrequentlyQuestionSection';
import Pricing from '@/components/shared/Pricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'SkillBridge is a platform that helps you learn new skills and get paid for them.',
};

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <div className="flex flex-col md:flex-row md:justify-between px-4 md:px-10 gap-6 md:gap-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 md:mb-0 text-center md:text-left">Our Pricing</h2>
        <p className="text-gray-600 max-w-2xl px-0 md:px-6 text-center md:text-left">
          Welcome to SkillBridge&apos;s Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We
          believe in providing flexible and affordable pricing options for our
          services. Whether you&apos;re an individual looking to enhance your
          skills or a business seeking professional development solutions, we
          have a plan that suits you. Explore our pricing options below and
          choose the one that best fits your requirements.
        </p>
      </div>
      <Pricing />
      <FrequentlyQuestionSection />
    </div>
  );
}
