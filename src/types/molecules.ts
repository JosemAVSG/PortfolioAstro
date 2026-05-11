import type { AstroComponentFactory } from 'astro';
import type { BaseProps } from './index';

export interface SocialLinkProps extends BaseProps {
  href: string;
  label: string;
  icon: AstroComponentFactory;
}

export interface TechBadgeProps extends BaseProps {
  name: string;
  icon?: AstroComponentFactory;
  iconClass?: string;
}

export interface TechTag {
  name: string;
  class: string;
  icon: AstroComponentFactory;
}

export interface ProjectCardProps extends BaseProps {
  title: string;
  description: string;
  tags: (TechTag | string)[];
  github: string;
  link?: string;
  image: string;
  index: number;
}

export interface ExperienceCardProps extends BaseProps {
  year: string;
  title: string;
  company: string;
  description: string;
  href?: string;
}