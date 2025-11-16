export const BUTTON_VARIANTS = {
  HOME: 'home',
  WHITE: 'white',
  CTA_LARGE: 'cta-large',
  CTA_SMALL: 'cta-small',
  LOGIN: 'login',
  GRAY: 'gray',
  NAV_LOGIN: 'nav-login',
  NAV_SIGNUP: 'nav-signup',
  TEXT_MEDIUM: 'text-medium',
  TEXT_SMALL: 'text-small',
} as const;

export type ButtonVariant =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
