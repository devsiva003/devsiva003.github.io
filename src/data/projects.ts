import collegeWebApp from '#/assets/images/clg-web-app.png';
import currencyConverter from '#/assets/images/currency-converter.png';
import todosHub from '#/assets/images/todos-hub.png';

type BasicProject = {
  year: string;
  title: string;
  desc: string;
  tags: string[];
  color: string;
  image: ImageMetadata;
};

export type Project = BasicProject &
  EitherOrBoth<{ url: string }, { github: string }>;

export const projects: ReadonlyArray<Project> = [
  {
    year: '2024',
    title: 'College ERP',
    desc: 'Web app build with MERN stack for college management',
    tags: ['MERN', 'JWT', 'RTK QUERY', 'Tailwind'],
    color: 'from-primary/20 to-secondary/20',
    url: 'https://clg-web-app.onrender.com',
    image: collegeWebApp,
  },
  {
    year: '2024',
    title: 'TodosHub',
    desc: 'Basic todo app',
    tags: ['MERN', 'JWT'],
    color: 'from-secondary/20 to-success/20',
    url: 'https://todosHub.onrender.com',
    github: 'https://github.com/devsiva003/todosHub',
    image: todosHub,
  },
  {
    year: '2023',
    title: 'Currency Converter',
    desc: 'Tool to convert currency rates effortlessly',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    color: 'from-warning/20 to-error/20',
    url: '/currency-converter',
    github:
      'https://github.com/devsiva003/devsiva003.github.io/tree/main/public/currency-converter',
    image: currencyConverter,
  },
];

// ts type either one of the two or both
type EitherOrBoth<T, U> = T | U | (T & U);
