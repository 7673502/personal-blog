import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Pramod Anandarao",
  description:
    "A random assortment of thoughts",
  href: "https://blog.pramodna.com",
  author: "Pramod Anandarao",
  locale: "en-US",
};

export const NAV_LINKS: NavigationLinks = {
  blog: {
    path: "/posts",
    label: "Posts",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  github: {
    label: "GitHub",
    href: "https://github.com/7673502",
  },
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/pramodanandarao/",
  },
  bluesky: {
    label: "Bluesky",
    href: "https://bsky.app/profile/pramod1.bsky.social",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pramod-anandarao-706690221/",
  },
};
