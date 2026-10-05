import type { BaseProps } from './index';

export type AstroComponent = any;

export interface TechBadgeProps extends BaseProps {
  name: string;
  icon?: AstroComponent;
  iconClass?: string;
}

export interface TechTag {
  name: string;
  class: string;
  icon?: AstroComponent;
}

export interface Collaborator {
  name: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  tags: TechTag[];
  github: string;
  link?: string;
  image: string;
  images?: string[];
  collaborators?: Collaborator[];
  /** Rank (1 = first). Featured projects render large above the grid. */
  featured?: number;
}

export interface ProjectCardProps extends BaseProps {
  title: string;
  description: string;
  tags: (TechTag | string)[];
  github: string;
  link?: string;
  image: string;
  images?: string[];
  collaborators?: Collaborator[];
  withLabel?: string;
  index: number;
}

export interface ExperienceCardProps extends BaseProps {
  year: string;
  title: string;
  company: string;
  description: string;
  href?: string;
}

export interface SocialLinkProps extends BaseProps {
  href: string;
  label: string;
  icon: AstroComponent;
}