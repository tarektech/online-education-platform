'use client';
import { Plus, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  isExpandable?: boolean;
  hasLink?: boolean;
}

const FAQItems: FAQItem[] = [
  {
    question: 'Can I enroll in multiple courses at once?',
    answer:
      'Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.',
    hasLink: true,
  },
  {
    question: 'What kind of support can I expect from instructors?',
    answer:
      'Our instructors provide comprehensive support through discussion forums, email assistance, and regular office hours. Pro Plan members receive priority support with faster response times.',
    isExpandable: true,
  },
  {
    question:
      'Are the courses self-paced or do they have specific start and end dates?',
    answer:
      'Most of our courses are self-paced, allowing you to learn at your own speed. Some specialized courses may have scheduled start dates to facilitate group learning and collaboration.',
    isExpandable: true,
  },
  {
    question: 'Are there any prerequisites for the courses?',
    answer:
      'Prerequisites vary by course. While some beginner courses have no prerequisites, advanced courses may require prior knowledge or completion of foundational courses.',
    isExpandable: true,
  },
  {
    question: 'Can I download the course materials for offline access?',
    answer:
      'Yes, Pro Plan members can download course materials for offline viewing. Free Plan users have limited offline access to selected course content.',
    isExpandable: true,
  },
];

const FAQItem = ({
  question,
  answer,
  isExpandable = false,
  hasLink = false,
}: FAQItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <div
        className="flex justify-between items-start cursor-pointer group"
        onClick={() => isExpandable && setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
          {question}
        </h3>
        {isExpandable ? (
          <button className="ml-6 h-7 w-7 flex items-center justify-center rounded-full bg-[#FFF4EB] group-hover:bg-orange-100 transition-colors">
            {isOpen ? (
              <X className="h-5 w-5 text-orange-500 transition-transform duration-200 rotate-0" />
            ) : (
              <Plus className="h-5 w-5 text-orange-500 transition-transform duration-200 rotate-0 hover:rotate-90" />
            )}
          </button>
        ) : null}
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          !isExpandable || isOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-4">
            <p className="text-gray-600">{answer}</p>
            {hasLink && (
              <button className="mt-4 flex items-center text-gray-900 hover:text-orange-500 transition-colors group">
                <span>Enrollment Process for Different Courses</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


const FrequentlyQuestionSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-xl mb-4">
              Still you have any questions? Contact our <br /> Team via {' '}
              <a
                href="mailto:support@skillbridge.com"
                className="text-orange-500 hover:underline"
              >
                support@skillbridge.com
              </a>
            </p>
            <button className="mt-6 text-gray-900 font-medium hover:text-orange-500 transition-colors">
              See All FAQ&apos;s
            </button>
          </div>

          <div className="space-y-2">
            {FAQItems.map((item, index) => (
              <FAQItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyQuestionSection;
