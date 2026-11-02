import { Fragment } from 'react';
import type { RichText as RichTextValue } from '@/types/profile';

/** Renders text runs from data files, wrapping `{ strong }` runs in <b>. */
export function RichText({ value }: { value: RichTextValue }) {
  return (
    <>
      {value.map((part, i) =>
        typeof part === 'string' ? (
          <Fragment key={i}>{part}</Fragment>
        ) : (
          <b key={i}>{part.strong}</b>
        ),
      )}
    </>
  );
}
