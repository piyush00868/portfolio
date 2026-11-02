import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageContainerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

/** The centered 800px column with dashed side rails that every page sits in. */
export function PageContainer({ children, as: Tag = 'div', className }: PageContainerProps) {
  return (
    <Tag
      className={cn(
        'border-line-strong relative mx-auto min-h-screen max-w-[800px] border-x border-dashed',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
