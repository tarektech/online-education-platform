'use client';

import { motion } from 'framer-motion';

type AboutCardProps = {
  about: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  headtitle: string;
  headdescription: string;
};

export default function AboutCard({
  about,
  headtitle,
  headdescription,
}: AboutCardProps) {
  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto px-4 my-12">
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-[48px] font-bold">{headtitle}</h1>
        <p className="text-[18px] text-gray-600">{headdescription}</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {about.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="flex flex-col gap-4 bg-white shadow-md p-[50px] rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              }}
            >
              <motion.span
                className="bg-orange-90 w-fit p-4 stroke-orange-90 rounded-md"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {item.icon}
              </motion.span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[24px] font-bold">{item.title}</h3>
                <p className="text-[16px] text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
