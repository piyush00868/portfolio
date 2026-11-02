'use client';

import { useEffect, useRef, useState } from 'react';
import { IconButton } from '@/components/ui/IconButton';
import { CloseIcon, LinkIcon } from '@/components/ui/icons';
import { TagList } from '@/components/ui/Tag';
import type { Project } from '@/types/project';
import { externalLinkProps } from '@/lib/utils';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

/**
 * Native <dialog> with the full write-up for one project. showModal() gives
 * focus trapping, Escape to close and the backdrop for free.
 */
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  // Keep the last project rendered while the dialog closes, so content doesn't blank out.
  const [shown, setShown] = useState<Project | null>(project);
  if (project && project !== shown) setShown(project);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  return (
    <dialog
      ref={ref}
      className="border-line-strong bg-bg-2 text-fg open:animate-pop m-auto w-[calc(100%-32px)] max-w-[640px] rounded-2xl border p-0 shadow-[0_30px_80px_rgba(0,0,0,.5)] backdrop:bg-black/55 backdrop:backdrop-blur-[4px]"
      aria-labelledby="project-modal-title"
      onClose={onClose}
      onClick={(e) => {
        // A click on the dialog element itself (not its content) is a backdrop click.
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
    >
      {shown && (
        <>
          <div className="flex justify-between gap-3 px-6 pt-[22px]">
            <div>
              <h3
                id="project-modal-title"
                className="font-serif text-[34px] leading-[1.1] tracking-[-0.01em]"
              >
                {shown.title}
              </h3>
              <p className="text-muted mt-1 text-sm">{shown.modalSubtitle}</p>
            </div>
            <IconButton aria-label="Close" onClick={() => ref.current?.close()}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="px-6 pt-4 pb-6">
            <ul className="grid list-none gap-2.5">
              {shown.highlights.map((h) => (
                <li
                  key={h}
                  className="text-fg-2 before:bg-muted relative pl-4 text-[14.5px] leading-[1.55] before:absolute before:top-[9px] before:left-px before:size-[5px] before:rounded-full before:content-['']"
                >
                  {h}
                </li>
              ))}
            </ul>
            <TagList tags={shown.tags} className="mt-[18px]" />
            <div className="mt-5 flex flex-wrap gap-2">
              {shown.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="border-line-strong hover:bg-chip inline-flex items-center gap-[7px] rounded-[9px] border px-3 py-[7px] text-[13.5px] font-medium transition-colors duration-200"
                  {...externalLinkProps}
                >
                  <LinkIcon name={link.icon} className="size-[15px]" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}
