import {
  cardClass,
  cardFootClass,
  cardHeadClass,
  cardSummaryClass,
  cardTaglineClass,
} from './card-styles';
import { ProjectCardShell } from './ProjectCardShell';
import { ProjectCover } from './covers/ProjectCover';
import { LinkIcon } from '@/components/ui/icons';
import { TagList } from '@/components/ui/Tag';
import type { Project, ProjectStatus } from '@/types/project';
import { cn, externalLinkProps } from '@/lib/utils';

const statusLabel: Record<ProjectStatus, string> = {
  live: 'Live',
  'open-source': 'Open source',
};

interface ProjectCardProps {
  project: Project;
  /** Reveal delay, used to stagger the two grid columns. */
  delay?: number;
}

/** Grid card. Clicking anywhere except a link opens the project's detail modal. */
export function ProjectCard({ project, delay }: ProjectCardProps) {
  const cardLinks = project.links.filter((l) => l.onCard);
  return (
    <ProjectCardShell slug={project.slug} title={project.title} className={cardClass} delay={delay}>
      <ProjectCover cover={project.cover} ribbon={project.ribbon} />

      <div className={cardHeadClass}>
        <h3 className="text-xl font-semibold tracking-[-0.01em]">{project.title}</h3>
        {project.status && (
          <span className="text-muted inline-flex items-center gap-1.5 text-[13.5px] whitespace-nowrap">
            <i
              className={cn(
                'size-1.5 rounded-full',
                project.status === 'live' ? 'bg-online' : 'bg-muted',
              )}
            />
            {statusLabel[project.status]}
          </span>
        )}
      </div>
      <div className={cardTaglineClass}>{project.tagline}</div>
      <p className={cardSummaryClass}>{project.summary}</p>

      <div className={cardFootClass}>
        <TagList tags={project.cardTags} />
        {cardLinks.length > 0 && (
          <div className="flex shrink-0 gap-1">
            {cardLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                title={link.cardTitle ?? link.label}
                aria-label={`${project.title}: ${link.cardTitle ?? link.label}`}
                className="text-muted hover:bg-chip hover:text-fg grid size-8 place-items-center rounded-lg transition-[background,color] duration-200 [&_svg]:size-[18px]"
                {...externalLinkProps}
              >
                <LinkIcon name={link.icon} />
              </a>
            ))}
          </div>
        )}
      </div>
    </ProjectCardShell>
  );
}
