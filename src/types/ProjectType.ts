export type ProjectType = {
  id: number;
  title: string;
  projectType: 'individual' | 'group';
  date: string;
  description: string;
  details?: string;
  image: string;
  technologies: string[];
  projectUrl: string;
};
