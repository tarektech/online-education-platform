'use client';
import { courseType } from '@/constant/courses';
import Image from '@/components/Image';
import { motion } from 'framer-motion';

type CourseCardProps = {
  course: courseType;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {course.map((course) => {
        return (
          <motion.div
            key={course.id}
            className="p-4 sm:p-6 lg:p-10 bg-white rounded-lg shadow-md overflow-hidden my-4 sm:my-6 lg:my-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
              {/* top section with images */}
              <motion.div
                className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex flex-col gap-2">
                  <motion.h2
                    className="text-xl sm:text-2xl font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {course.title}
                  </motion.h2>
                  <motion.p
                    className="text-sm sm:text-base text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {course.description}
                  </motion.p>
                </div>
                <motion.button
                  className="px-3 sm:px-4 py-2 rounded-md whitespace-nowrap text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  view Course
                </motion.button>
              </motion.div>
              <motion.div
                className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Image
                  path={course.image.image1}
                  alt={course.title}
                  width={400}
                  height={350}
                  className="rounded-lg object-cover w-full h-[100px] sm:h-[150px] lg:h-[200px]"
                />
                <Image
                  path={course.image.image2}
                  alt={course.title}
                  width={400}
                  height={350}
                  className="rounded-lg object-cover w-full h-[100px] sm:h-[150px] lg:h-[200px]"
                />
                <Image
                  path={course.image.image3}
                  alt={course.title}
                  width={400}
                  height={350}
                  className="rounded-lg object-cover w-full h-[100px] sm:h-[150px] lg:h-[200px]"
                />
              </motion.div>
              <motion.div
                className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex gap-2">
                  <p className="p-2 text-sm sm:text-base">{course.duration}</p>
                  <p className="p-2 text-sm sm:text-base">{course.level}</p>
                </div>
                <p className="p-2 text-sm sm:text-base">{course.author}</p>
              </motion.div>
            </div>
            <motion.div
              className="flex flex-col gap-6 sm:gap-8 lg:gap-10 py-6 sm:py-8 lg:py-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.p
                className="text-xl sm:text-2xl font-bold"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Curriculum
              </motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
                {Object.values(course.Curriculum).map((week, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-3 sm:gap-4 p-4 sm:px-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.span
                      className="font-bold text-3xl sm:text-4xl"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        type: 'spring',
                        stiffness: 100,
                      }}
                    >
                      {`0${index + 1}`}
                    </motion.span>
                    <motion.p
                      className="text-sm sm:text-base"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {week}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
