'use client';

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { ProjectModal } from './ProjectModal';
import type { Project } from '@/types/project';

interface ProjectDialogContextValue {
  open: (slug: string) => void;
}

const ProjectDialogContext = createContext<ProjectDialogContextValue | null>(null);

export function useProjectDialog() {
  const ctx = useContext(ProjectDialogContext);
  if (!ctx) throw new Error('useProjectDialog must be used inside <ProjectDialogProvider>');
  return ctx;
}

/** Owns which project's modal is open. Cards call `open(slug)`. */
export function ProjectDialogProvider({
  projects,
  children,
}: {
  projects: readonly Project[];
  children: ReactNode;
}) {
  const [slug, setSlug] = useState<string | null>(null);
  const open = useCallback((s: string) => setSlug(s), []);
  const close = useCallback(() => setSlug(null), []);
  const value = useMemo(() => ({ open }), [open]);
  const project = projects.find((p) => p.slug === slug) ?? null;

  return (
    <ProjectDialogContext.Provider value={value}>
      {children}
      <ProjectModal project={project} onClose={close} />
    </ProjectDialogContext.Provider>
  );
}
