import type { Preset } from '@/tailwind-plugin';

const defaultPreset: Preset = {
  light: {
    background: '0 0% 98%',
    foreground: '0 0% 3.9%',
    muted: '0 0% 96.1%',
    'muted-foreground': '0 0% 45.1%',
    popover: '0 0% 100%',
    'popover-foreground': '0 0% 15.1%',
    card: '0 0% 99.7%',
    'card-foreground': '0 0% 3.9%',
    border: '0 0% 89.8%',
    primary: '0 0% 9%',
    'primary-foreground': '0 0% 98%',
    secondary: '0 0% 96.1%',
    'secondary-foreground': '0 0% 9%',
    accent: '0 0% 94.1%',
    'accent-foreground': '0 0% 9%',
    ring: '0 0% 63.9%',
  },
  dark: {
    background: '0 0% 3.9%',
    foreground: '0 0% 98%',
    muted: '0 0% 12.9%',
    'muted-foreground': '0 0% 60.9%',
    popover: '0 0% 7%',
    'popover-foreground': '0 0% 88%',
    card: '0 0% 8%',
    'card-foreground': '0 0% 98%',
    border: '0 0% 18%',
    primary: '0 0% 98%',
    'primary-foreground': '0 0% 9%',
    secondary: '0 0% 12.9%',
    'secondary-foreground': '0 0% 98%',
    accent: '0 0% 14.9%',
    'accent-foreground': '0 0% 90%',
    ring: '0 0% 14.9%',
  },
};

const oceanPreset: Preset = {
  light: {
    background: '0 0% 98%',
    foreground: '0 0% 3.9%',
    muted: '220 90% 96.1%',
    'muted-foreground': '0 0% 45.1%',
    popover: '0 0% 98%',
    'popover-foreground': '0 0% 15.1%',
    card: '220 50% 98%',
    'card-foreground': '0 0% 3.9%',
    border: '220 50% 89.8%',
    primary: '210 80% 20.2%',
    'primary-foreground': '0 0% 98%',
    secondary: '220 90% 96.1%',
    'secondary-foreground': '0 0% 9%',
    accent: '220 50% 94.1%',
    'accent-foreground': '0 0% 9%',
    ring: '220 100% 63.9%',
  },
  dark: {
    'card-foreground': '220 60% 94.5%',
    'primary-foreground': '0 0% 9%',
    'secondary-foreground': '220 80% 90%',
    ring: '205 100% 85%',
    card: '220 50% 10%',
    muted: '220 50% 10%',
    'muted-foreground': '220 30% 65%',
    'accent-foreground': '220 80% 90%',
    popover: '220 50% 10%',
    'popover-foreground': '220 30% 65%',
    accent: '220 40% 20%',
    secondary: '220 50% 20%',
    background: '220 60% 6%',
    foreground: '220 60% 94.5%',
    primary: '205 100% 85%',
    border: '220 50% 20%',
  },
  css: {
    '.dark body': {
      'background-image':
        'linear-gradient(rgba(5, 105, 255, 0.15), transparent 20rem, transparent)',
    },
  },
};

const neutral: Preset = {
  light: {
    background: '0 0% 96%',
    foreground: '0 0% 3.9%',
    muted: '0 0% 96.1%',
    'muted-foreground': '0 0% 45.1%',
    popover: '0 0% 100%',
    'popover-foreground': '0 0% 15.1%',
    card: '0 0% 94.7%',
    'card-foreground': '0 0% 3.9%',
    border: '0 0% 89.8%',
    primary: '0 0% 9%',
    'primary-foreground': '0 0% 98%',
    secondary: '0 0% 93.1%',
    'secondary-foreground': '0 0% 9%',
    accent: '0 0% 90.1%',
    'accent-foreground': '0 0% 9%',
    ring: '0 0% 63.9%',
  },
  dark: {
    background: '0 0% 8.9%',
    foreground: '0 0% 92%',
    muted: '0 0% 12.9%',
    'muted-foreground': '0 0% 60.9%',
    popover: '0 0% 9.8%',
    'popover-foreground': '0 0% 88%',
    card: '0 0% 10%',
    'card-foreground': '0 0% 98%',
    border: '0 0% 18%',
    primary: '0 0% 98%',
    'primary-foreground': '0 0% 9%',
    secondary: '0 0% 12.9%',
    'secondary-foreground': '0 0% 98%',
    accent: '0 0% 16.9%',
    'accent-foreground': '0 0% 90%',
    ring: '0 0% 14.9%',
  },
  css: {
    aside: {
      '--muted-foreground': '0 0% 29%',
      'font-weight': '500',
    },
    'aside::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      right: '0',
      zIndex: '-1',
      width: 'calc(max(0px, 100vw - theme(maxWidth.container)) + 100% + 1rem)',
      height: '100%',
      background: 'hsl(0 0% 93%)',
      borderRight: '1px solid',
      borderRightColor: `theme(borderColor.border)`,
    },
    '.dark aside': {
      '--muted-foreground': '0 0% 72%',
    },
    '.dark aside::before': {
      background: 'hsl(0 0% 11.5%)',
    },
  },
};

const purple: Preset = {
  light: {
    background: '256 100% 96%',
    primary: '270 100% 52%',
    border: '270 40% 80%',
    accent: '270 60% 86%',
    'accent-foreground': '270 100% 20%',
    muted: '256 60% 94%',
    'muted-foreground': '256 50% 50%',
    foreground: '256 60% 26%',
    secondary: '270 60% 90%',
    'secondary-foreground': '256 60% 10%',
    card: '256 60% 92%',
    'card-foreground': '256 100% 20%',
    'popover-foreground': '256 100% 20%',
    popover: '256 60% 96%',
    'primary-foreground': '270 100% 20%',
    ring: '270 100% 52%',
  },
  dark: {
    background: '256 60% 6%',
    primary: '270 100% 86%',
    border: '270 100% 20%',
    accent: '256 60% 26%',
    'accent-foreground': '270 100% 86%',
    muted: '256 60% 10%',
    foreground: '256 60% 90%',
    'muted-foreground': '256 50% 75%',
    secondary: '270 100% 20%',
    'secondary-foreground': '256 60% 90%',
    card: '256 60% 10%',
    'card-foreground': '256 60% 90%',
    'popover-foreground': '256 60% 90%',
    popover: '256 60% 6%',
    'primary-foreground': '256 60% 6%',
    ring: '270 100% 86%',
  },
};

const dusk: Preset = {
  light: {
    background: '250 20% 92%',
    primary: '340 40% 48%',
    border: '240 40% 90%',
    accent: '250 30% 90%',
    'accent-foreground': '250 20% 20%',
    muted: '240 30% 94%',
    'muted-foreground': '240 10% 50%',
    foreground: '220 20% 30%',
    secondary: '250 40% 94%',
    'secondary-foreground': '240 40% 10%',
    card: '250 20% 92%',
    'card-foreground': '250 20% 20%',
    'popover-foreground': '250 40% 20%',
    popover: '250 40% 96%',
    'primary-foreground': '240 80% 20%',
    ring: '340 40% 48%',
  },
  dark: {
    ring: '340 100% 90%',
    'primary-foreground': '240 40% 4%',
    popover: '240 20% 5%',
    'popover-foreground': '250 20% 90%',
    primary: '340 100% 90%',
    border: '220 15% 15%',
    background: '220 15% 6%',
    foreground: '220 15% 87%',
    muted: '220 20% 15%',
    'muted-foreground': '220 15% 60%',
    accent: '250 20% 15%',
    secondary: '240 20% 15%',
    'card-foreground': '240 15% 87%',
    card: '240 20% 5%',
    'secondary-foreground': '250 20% 90%',
    'accent-foreground': '340 5% 90%',
  },
};

export const presets = {
  purple,
  default: defaultPreset,
  ocean: oceanPreset,
  neutral,
  dusk,
};
