function ArrowUpRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}
const benefitsData = [
  {
    id: 1,
    number: '01',
    title: 'Flexible Learning Schedule',
    description:
      'Fit your coursework around your existing commitments and obligations.',
    icon: <ArrowUpRight />,
  },
  {
    id: 2,
    number: '02',
    title: 'Expert Instruction',
    description:
      'Learn from industry experts who have hands-on experience in design and development.',
    icon: <ArrowUpRight />,
  },
  {
    id: 3,
    number: '03',
    title: 'Diverse Course Offerings',
    description:
      'Explore a wide range of design and development courses covering various topics.',
    icon: <ArrowUpRight />,
  },
  {
    id: 4,
    number: '04',
    title: 'Updated Curriculum',
    description:
      'Access courses with up-to-date content reflecting the latest trends and industry practices.',
    icon: <ArrowUpRight />,
  },
  {
    id: 5,
    number: '05',
    title: 'Practical Projects and Assignments',
    description:
      'Develop a portfolio showcasing your skills and abilities to potential employers.',
    icon: <ArrowUpRight />,
  },
  {
    id: 6,
    number: '06',
    title: 'Interactive Learning Environment',
    description:
      'Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.',
    icon: <ArrowUpRight />,
  },
];

function BenefitCard({ benefit }: { benefit: (typeof benefitsData)[number] }) {
  return (
    <div className="flex flex-col gap-6 p-10">
      <span className="text-grey-15 font-bold text-4xl ml-auto mr-4">
        {benefit.number}
      </span>
      <div className="flex flex-col gap-[10px]">
        <p className="text-sm font-extrabold text-[#333333]">{benefit.title}</p>
        <p className="text-sm text-grey-30">{benefit.description}</p>
      </div>
      <div className="ml-auto mr-4 text-orange-50 bg-light-99  p-2">
        {benefit.icon}
      </div>
    </div>
  );
}

export default function BenefitsSection() {
  return (
    <section className="grid gap-20 w-[90%] md:w-[85%] lg:w-[80%] mx-auto py-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl ">Benefits</h1>
          <p className="text-sm md:text-lg pr-4 md:pr-10 text-grey-30 ">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <p className="whitespace-nowrap text-sm md:text-base">View All</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
        {benefitsData.map((benefit) => (
          <BenefitCard key={benefit.id} benefit={benefit} />
        ))}
      </div>
    </section>
  );
}
