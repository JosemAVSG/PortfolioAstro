import type { AstroComponentFactory } from 'astro';

export interface BaseProps {
  class?: string;
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  href?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: AstroComponentFactory;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface HeroProps extends BaseProps {
  name?: string;
  role?: string;
  avatarUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  codepenUrl?: string;
  showOpenToWork?: boolean;
}

export interface AboutMeProps extends BaseProps {
  name?: string;
  role?: string;
  location?: string;
  avatarUrl?: string;
  bio?: string[];
}

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends BaseProps {
  href: string;
  variant?: ButtonVariant;
}

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends BaseProps {
  level?: HeadingLevel;
}