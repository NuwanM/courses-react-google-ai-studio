
import React, { useState } from 'react';
import { COURSE_CATEGORIES } from '../constants';
import AccordionItem from './AccordionItem';

const CoursesSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(COURSE_CATEGORIES[0]?.id || null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="courses" className="py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Curriculum
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our comprehensive range of courses tailored for the future of tech.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {COURSE_CATEGORIES.map((category) => (
            <AccordionItem
              key={category.id}
              id={category.id}
              title={category.title}
              courses={category.courses}
              isOpen={openId === category.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
   