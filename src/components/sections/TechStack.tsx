import { TechStackExplorer } from './tech-stack/TechStackExplorer';
import { techFilters, techStack } from '@/data/tech-stack';

export function TechStack() {
  return (
    <section id="stack">
      <TechStackExplorer filters={techFilters} items={techStack} />
    </section>
  );
}
