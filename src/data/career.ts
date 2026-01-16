export type CareerItem = {
  date: string;
  role: string;
  company: string;
  desc: string;
  tags: string[];
  current?: true;
};

export const career: ReadonlyArray<CareerItem> = [
  {
    date: 'JUL 2025 — PRESENT',
    role: 'Application Engineer',
    company: 'Datasirpi',
    desc: 'Built product and client-facing features such as a workflow automation system and a PDF editor, focusing on usability, scalability, and clean implementation.',
    tags: ['React', 'Angular', 'TypeScript', 'Node.js', 'PostgreSQL'],
    current: true,
  },
  {
    date: 'JUL 2023 — JUNE 2025',
    role: 'Full Stack Developer',
    company: 'eFloz IT Services',
    desc: 'Started my professional journey. Learned best practices and contributed to product development.',
    tags: ['MERN', 'Socket.io', 'Electron', 'SQLite', 'React Native'],
  },
  {
    date: '2023 — 2025',
    role: 'Master of Business Administration (MBA)',
    company: 'Madurai Kamaraj University',
    desc: "Master's in Business Administration (Distance Learning). Focus on core business management and computer science concepts.",
    tags: [],
  },
  {
    date: '2020 — 2023',
    role: 'Computer Science Degree (BSc)',
    company: 'The Madurai Thiraviyam Thaiyumanavar Hindu College',
    desc: "Bachelor's in Computer Science. Focus on software engineering and web technologies.",
    tags: [],
  },
];
