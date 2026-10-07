import type { ProjectType } from '../types/ProjectType';

export const projectData: ProjectType[] = [
  {
    id: 1,
    title: 'Bookworm',
    projectType: 'group',
    date: 'September 2026',
    description:
      'Book application built with API integration and frontend development.',
    details:
      'Focus on API integration, user interaction and modern frontend development.',
    image: '/images/bookworm.jpg',
    technologies: ['JavaScript', 'API', 'HTML', 'CSS'],
    projectUrl: 'https://api-assignment-2-eta.vercel.app/index.html',
  },
  {
    id: 2,
    title: 'API Project - Express & SQL',
    projectType: 'individual',
    date: 'June 2026',
    description:
      'Backend project using Express and SQL with CRUD functionality.',
    details:
      'Created REST endpoints and worked with databases, CRUD operations, Beekeeper and Insomnia.',
    image: '/images/api-project.jpg',
    technologies: [
      'Express',
      'SQL',
      'CRUD',
      'Backend',
      'Insomnia',
      'Beekeeper',
    ],
    projectUrl: '/pdfs/api-project-readme.pdf',
  },
  {
    id: 3,
    title: 'Negative Space',
    projectType: 'group',
    date: 'May 2026',
    description: 'Responsive design implementation based on a supplied mockup.',
    details:
      'Group project focused on UX/UI, layout techniques, teamwork and component thinking.',
    image: '/images/negative-space.jpg',
    technologies: ['UX/UI', 'Layout', 'Responsive Design', 'Teamwork'],
    projectUrl:
      'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-negative-space',
  },
  {
    id: 4,
    title: 'UX Review - Accessibility Analysis',
    projectType: 'individual',
    date: 'April 2026',
    description:
      'Accessibility and usability review of an existing public website.',
    details:
      'Analysis included personas, WCAG 2.1, usability, navigation and content review.',
    image: '/images/ux-review.jpg',
    technologies: [
      'UX',
      'WCAG',
      'Accessibility',
      'Usability Testing',
      'Personas',
    ],
    projectUrl: '/pdfs/ux-review.pdf',
  },
  {
    id: 5,
    title: 'Rädda Solen',
    projectType: 'group',
    date: 'February-March 2026',
    description: 'Browser game developed as a group project.',
    details: 'Focus on game mechanics, DOM manipulation and event handling.',
    image: '/images/radda-solen.jpg',
    technologies: ['JavaScript', 'DOM', 'Event Handling', 'Game Logic'],
    projectUrl:
      'https://helena-gustafsson.github.io/FED2025D_grupparbete_spel_radda_solen/',
  },
  {
    id: 6,
    title: 'Budget App',
    projectType: 'individual',
    date: 'February 2026',
    description: 'Budget application using TypeScript and LocalStorage.',
    details: 'Built with dynamic lists, form handling and persistent storage.',
    image: '/images/budget-app.jpg',
    technologies: ['TypeScript', 'LocalStorage', 'Forms', 'JavaScript'],
    projectUrl:
      'https://medieinstitutet.github.io/fed25d-js-inl-2-budget-app-Helena-Gustafsson',
  },
  {
    id: 7,
    title: 'Munkshoppen',
    projectType: 'individual',
    date: 'January 2026',
    description: 'Interactive webshop built with JavaScript.',
    details: 'Focus on validation, DOM manipulation, UI flows and Regex.',
    image: '/images/munkshoppen.jpg',
    technologies: ['JavaScript', 'HTML', 'CSS', 'DOM', 'Regex'],
    projectUrl:
      'https://helena-gustafsson.github.io/FED25D-inl-1-JS-Munkshoppen/',
  },
  {
    id: 8,
    title: 'Portfolio - HTML/CSS',
    projectType: 'individual',
    date: 'December 2025',
    description: 'My first developer portfolio website.',
    details:
      'Built during the HTML and CSS course focusing on layout, responsive design and semantic HTML.',
    image: '/images/portfolio-html-css.jpg',
    technologies: ['HTML', 'CSS', 'Responsive Design', 'Forms'],
    projectUrl:
      'https://helena-gustafsson.github.io/FED25D-HTML-CSS-inl-1-portfolio-Helena-Gustafsson',
  },
];
