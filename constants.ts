
import { CourseCategory } from './types';

export const COURSE_CATEGORIES: CourseCategory[] = [
  {
    id: 'frontend',
    title: 'Front-End Development',
    courses: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React Basics'],
  },
  {
    id: 'backend',
    title: 'Back-End Development',
    courses: ['.NET Core', 'Java Spring Boot', 'Node.js', 'REST APIs', 'Databases'],
  },
  {
    id: 'qa',
    title: 'QA & Testing',
    courses: ['Manual Testing', 'Test Case Writing', 'Selenium', 'Postman'],
  },
  {
    id: 'ui',
    title: 'UI Design',
    courses: ['Figma', 'Color Theory', 'Accessibility', 'Components'],
  },
  {
    id: 'ux',
    title: 'UX Design',
    courses: ['UX Research', 'Wireframes', 'Usability Testing', 'Cognitive Analysis'],
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    courses: ['Git & GitHub', 'CI/CD', 'Docker', 'Cloud Basics'],
  },
];
   