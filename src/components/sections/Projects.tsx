import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectDialogProvider } from '@/components/projects/ProjectDialogProvider';
import { SectionHeading, SectionLink } from '@/components/ui/SectionHeading';
import { allProjectsUrl, projects } from '@/data/projects';

/** Right-column cards reveal slightly after the left column. */
const staggerDelay = (index: number) => (index % 2) * 90;

export function Projects() {
  return (
    <section id="projects">
      <SectionHeading title="Projects">
        <SectionLink href={allProjectsUrl}>View all</SectionLink>
      </SectionHeading>
      <ProjectDialogProvider projects={projects}>
        <div className="grid grid-cols-2 max-[720px]:grid-cols-1">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={staggerDelay(i)} />
          ))}
        </div>
      </ProjectDialogProvider>
    </section>
  );
}
