import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Icon size: 18px by default, 17px for 'sm'. */
  size?: 'md' | 'sm';
};

/** Square ghost button for a single icon (theme toggle, modal close). */
export function IconButton({ className, size = 'md', type = 'button', ...props }: IconButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'text-fg hover:border-line hover:bg-chip grid size-[34px] cursor-pointer place-items-center rounded-[9px] border border-transparent bg-transparent transition-[background,border-color] duration-200',
        size === 'md' ? '[&_svg]:size-[18px]' : '[&_svg]:size-[17px]',
        className,
      )}
      {...props}
    />
  );
}
