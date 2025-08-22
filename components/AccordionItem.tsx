
import React from 'react';

interface AccordionItemProps {
  id: string;
  title: string;
  courses: string[];
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, title, courses, isOpen, onToggle }) => {
  return (
    <div className="border border-slate-200 rounded-lg shadow-sm overflow-hidden bg-white">
      <button
        onClick={() => onToggle(id)}
        className="w-full flex justify-between items-center p-5 text-left font-semibold text-slate-800 hover:bg-slate-50 focus:outline-none transition-colors duration-300"
      >
        <span className="text-lg">{title}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-5 border-t border-slate-200">
          <ul className="space-y-3">
            {courses.map((course, index) => (
              <li key={index} className="flex items-center text-slate-600">
                <svg className="w-4 h-4 mr-3 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
   