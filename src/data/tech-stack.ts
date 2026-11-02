import type { TechFilter, TechItem } from '@/types/tech-stack';

/** Filter tabs above the stack, in order. */
export const techFilters: readonly TechFilter[] = [
  { id: 'all', label: 'All' },
  { id: 'lang', label: 'Languages' },
  { id: 'fe', label: 'Frontend' },
  { id: 'be', label: 'Backend' },
  { id: 'db', label: 'Databases' },
  { id: 'ai', label: 'AI' },
  { id: 'tools', label: 'Tools' },
];

/**
 * Technologies, in display order. `brand` icons come from Simple Icons
 * (see data/icons/brand-icons.ts); `glyph` icons are generic.
 */
export const techStack: readonly TechItem[] = [
  { name: 'JavaScript', icon: { brand: 'javascript' }, category: 'lang' },
  { name: 'TypeScript', icon: { brand: 'typescript' }, category: 'lang' },
  { name: 'Python', icon: { brand: 'python' }, category: 'lang' },
  { name: 'SQL', icon: { glyph: 'db' }, category: 'lang' },
  { name: 'React', icon: { brand: 'react' }, category: 'fe' },
  { name: 'Tailwind CSS', icon: { brand: 'tailwindcss' }, category: 'fe' },
  { name: 'Node.js', icon: { brand: 'nodedotjs' }, category: 'be' },
  { name: 'Express.js', icon: { brand: 'express' }, category: 'be' },
  { name: 'JWT', icon: { brand: 'jsonwebtokens' }, category: 'be' },
  { name: 'PostgreSQL', icon: { brand: 'postgresql' }, category: 'db' },
  { name: 'MongoDB', icon: { brand: 'mongodb' }, category: 'db' },
  { name: 'Prisma', icon: { brand: 'prisma' }, category: 'db' },
  { name: 'Mongoose', icon: { brand: 'mongoose' }, category: 'db' },
  { name: 'LangChain', icon: { brand: 'langchain' }, category: 'ai' },
  { name: 'LangGraph', icon: { brand: 'langgraph' }, category: 'ai' },
  { name: 'Git', icon: { brand: 'git' }, category: 'tools' },
  { name: 'GitHub', icon: { brand: 'github' }, category: 'tools' },
  { name: 'Postman', icon: { brand: 'postman' }, category: 'tools' },
  { name: 'Vercel', icon: { brand: 'vercel' }, category: 'tools' },
  { name: 'Render', icon: { brand: 'render' }, category: 'tools' },
];
