import type { BrandIconName } from '@/data/icons/brand-icons';
import type { GlyphIconName } from '@/data/icons/glyph-icons';

export type TechCategory = 'lang' | 'fe' | 'be' | 'db' | 'ai' | 'tools';

export type TechIcon = { brand: BrandIconName } | { glyph: GlyphIconName };

export interface TechItem {
  name: string;
  icon: TechIcon;
  category: TechCategory;
}

export interface TechFilter {
  id: TechCategory | 'all';
  label: string;
}
