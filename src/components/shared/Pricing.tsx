'use client';
import { Check, X } from 'lucide-react';
import { useState } from 'react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlanProps {
  title: string;
  price: number;
  isYearly: boolean;
  features: PricingFeature[];
}

function PricingCard({ title, price, isYearly, features }: PricingPlanProps) {
  const yearlyPrice = price * 10; // 2 months free for yearly
  const displayPrice = isYearly ? yearlyPrice : price;

  return (
    <div className="bg-white rounded-lg p-8 shadow-xs border border-gray-100 flex flex-col h-full">
      <div className="bg-[#FFF9F4] -mx-8 px-8 py-4 -mt-8 rounded-t-lg mb-8">
        <h3 className="text-xl font-semibold text-gray-900 text-center">
          {title}
        </h3>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline justify-center">
          <span className="text-6xl font-bold text-gray-900">
            ${displayPrice}
          </span>
          <span className="text-gray-600 ml-2">
            /{isYearly ? 'year' : 'month'}
          </span>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        <h4 className="font-medium text-lg">Available Features</h4>
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            {feature.included ? (
              <Check className="w-5 h-5 text-orange-500 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-gray-400 mt-0.5" />
            )}
            <span className="text-gray-600">{feature.text}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
}

type PricingProps = {
  title?: string;
  description?: string;
};

export default function Pricing({ title, description }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);

  const freePlanFeatures = [
    { text: 'Access to selected free courses.', included: true },
    { text: 'Limited course materials and resources.', included: true },
    { text: 'Basic community support.', included: true },
    { text: 'No certification upon completion.', included: true },
    { text: 'Ad-supported platform.', included: true },
    { text: 'Access to exclusive Pro Plan community forums.', included: false },
    { text: 'Early access to new courses and updates.', included: false },
  ];

  const proPlanFeatures = [
    { text: 'Unlimited access to all courses.', included: true },
    { text: 'Unlimited course materials and resources.', included: true },
    { text: 'Priority support from instructors.', included: true },
    { text: 'Course completion certificates.', included: true },
    { text: 'Ad-free experience.', included: true },
    { text: 'Access to exclusive Pro Plan community forums.', included: true },
    { text: 'Early access to new courses and updates.', included: true },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        {title && (
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        )}
        {description && (
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        )}

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-4 py-2 rounded-lg ${
              !isYearly ? 'bg-orange-500 text-white' : 'text-gray-600'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-4 py-2 rounded-lg ${
              isYearly ? 'bg-orange-500 text-white' : 'text-gray-600'
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <PricingCard
          title="Free Plan"
          price={0}
          isYearly={isYearly}
          features={freePlanFeatures}
        />
        <PricingCard
          title="Pro Plan"
          price={79}
          isYearly={isYearly}
          features={proPlanFeatures}
        />
      </div>
    </section>
  );
}
