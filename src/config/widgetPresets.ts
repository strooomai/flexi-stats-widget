import { WidgetConfig } from '@/types/widget';

// Apple-inspired theme (minimal, light, refined)
export const appleConfig: WidgetConfig = {
  theme: {
    name: 'Apple',
    // Light, subtle gradient
    gradientStart: '0 0% 100%',
    gradientEnd: '0 0% 96%',
    // Neutral, high-contrast typography
    textColor: '220 9% 9%',
    textMuted: '220 9% 45%',
    // Soft cards with gentle borders (glass-like)
    glassBackground: '0 0% 100% / 0.72',
    glassBorder: '0 0% 0% / 0.08',
    // Minimal dark accent for chips/toggles
    accentColor: '0 100% 80%',
    // Prominent, simple CTA: black button with white text
    ctaBackground: '0 0% 10%',
    ctaText: '0 0% 100%',
  },
  logo: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    alt: 'Apple logo',
    width: 72,
  },
  texts: {
    title: 'Energie Vandaag',
    subtitle: 'Real-time verbruiksmonitoring',
    co2Section: {
      title: 'Besparing CO2-uitstoot',
      value: '9.8 kg',
      description: 'Efficiënt en stil in de achtergrond',
    },
    gasSection: {
      title: 'Besparing gasverbruik',
      value: '€ 2.90',
      description: 'Transparant inzicht zonder ruis',
    },
    slimSturingSection: {
      title: 'Slim Sturing',
      subtitle: 'Naadloos, intuïtief en responsief',
      gasSaving: {
        label: 'Geld Bespaard',
        value: '€2.05',
        note: 'Consistente optimalisatie',
      },
      co2Saving: {
        label: 'CO₂ Bespaard',
        value: '4.1 kg',
        note: 'Minder uitstoot, zelfde comfort',
      },
      ctaText: 'Activeer Slim Sturing',
    },
    footer: 'Live updates • Inspired by Apple design',
  },
};

// FC Twente theme
export const fcTwenteConfig: WidgetConfig = {
  theme: {
    name: 'FC Twente',
    gradientStart: '354 98% 40%',
    gradientEnd: '354 98% 40%',
    textColor: '0 0% 100%',
    textMuted: '0 0% 100% / 0.9',
    glassBackground: '0 0% 100% / 0.85',
    glassBorder: '0 0% 0% / 0.12',
    accentColor: '0 0% 100%',
    // Very dark gray text on white accent and for period chips
    accentText: '0 0% 10%',
    periodText: '0 0% 10%',
    // Darker red inside cards for readability
    cardText: '354 98% 20%',
    cardTextMuted: '354 70% 35%',
    ctaBackground: '0 0% 100%',
    ctaText: '354 98% 25%',
  },
  logo: {
    url: 'https://fctwente.nl/resources/fctwente/dist/images/logo.svg',
    alt: 'FC Twente logo',
    width: 90,
  },
  texts: {
    title: 'Energie Vandaag',
    subtitle: 'Real-time verbruiksmonitoring',
    co2Section: {
      title: 'Besparing CO2-uitstoot',
      value: '11.2 kg',
      description: 'Vandaag al bespaard door slim energiegebruik',
    },
    gasSection: {
      title: 'Besparing gasverbruik',
      value: '€ 3.06',
      description: 'Bespaard op gaskosten vandaag',
    },
    slimSturingSection: {
      title: 'Slim Sturing',
      subtitle: 'Jouw potentiële besparingen, vandaag',
      gasSaving: {
        label: 'Geld Bespaard',
        value: '€2.16',
        note: 'Team-efficiëntie in huis',
      },
      co2Saving: {
        label: 'CO₂ Bespaard',
        value: '4.6 kg',
        note: 'Minder uitstoot, meer winst',
      },
      ctaText: 'Activeer Slim Sturing',
    },
    footer: 'Live updates • Powered by FC Twente',
  },
};

// Remeha theme (Default)
export const remehaConfig: WidgetConfig = {
  theme: {
    name: 'Remeha',
    gradientStart: '49 100% 50%',
    gradientEnd: '49 100% 50%',
    textColor: '220 9% 9%', // near-black text for readability on yellow
    textMuted: '220 9% 20%',
    // Make cards light-neutral instead of picking up yellow
    glassBackground: '0 0% 95% / 0.85',
    glassBorder: '0 0% 0% / 0.12',
    accentColor: '0 0% 100%',
    ctaBackground: '0 0% 100%',
    ctaText: '49 100% 25%',
  },
  logo: {
    url: 'https://edge.sitecorecloud.io/bdrthermea1-platform-production-864a/media/Project/RemehaNL/RemehaNL/Images/Logos/logo-black.svg?iar=0',
    alt: 'Remeha logo',
    width: 120,
  },
  texts: {
    title: 'Energie Vandaag',
    subtitle: 'Real-time verbruiksmonitoring',
    co2Section: {
      title: 'Besparing CO2-uitstoot',
      value: '12.4 kg',
      description: 'Vandaag al bespaard door slim energiegebruik',
    },
    gasSection: {
      title: 'Besparing gasverbruik',
      value: '€ 3.18',
      description: 'Bespaard op gaskosten vandaag',
    },
    slimSturingSection: {
      title: 'Slim Sturing',
      subtitle: 'Jouw potentiële besparingen, vandaag',
      gasSaving: {
        label: 'Geld Bespaard',
        value: '€2.42',
        note: '≈35% reductie',
      },
      co2Saving: {
        label: 'CO₂ Bespaard',
        value: '5.2 kg',
        note: 'Minder uitstoot, zelfde comfort',
      },
      ctaText: 'Activeer Slim Sturing',
    },
    footer: 'Live updates • Powered by Remeha',
  },
};

// Pink theme (Kemkens style)
export const kemkensConfig: WidgetConfig = {
  theme: {
    name: 'Kemkens',
    gradientStart: '330 100% 20%', // #660033
    gradientEnd: '330 100% 65%',  // #ff4da6
    textColor: '0 0% 100%', // #FFFFFF
    textMuted: '0 0% 100% / 0.95',
    glassBackground: '255 255 255 / 0.09',
    glassBorder: '255 255 255 / 0.25',
    accentColor: '142 76% 73%',
    ctaBackground: '0 0% 100%',
    ctaText: '327 73% 25%',
  },
  logo: {
    url: 'https://www.kemkens.nl/wp-content/uploads/2024/10/kemkens.svg',
    alt: 'Kemkens logo',
    width: 96,
  },
  texts: {
    title: 'Energie Vandaag',
    subtitle: 'Real-time verbruiksmonitoring',
    co2Section: {
      title: 'Besparing CO2-uitstoot',
      value: '12.4 kg',
      description: 'Vandaag al bespaard door slim energiegebruik',
    },
    gasSection: {
      title: 'Besparing gasverbruik',
      value: '€ 3.18',
      description: 'Bespaard op gaskosten vandaag',
    },
    slimSturingSection: {
      title: 'Met Slim Sturing',
      subtitle: 'Jouw potentiële besparingen, vandaag',
      gasSaving: {
        label: 'Geld Bespaard',
        value: '€2.42',
        note: '35% reductie',
      },
      co2Saving: {
        label: 'CO₂ Bespaard',
        value: '5.2 kg',
        note: '42% minder uitstoot',
      },
      ctaText: 'Activeer Slim Sturing',
    },
    footer: 'Live updates • Powered by Kemkens Slim Sturing',
  },
};

// Feenstra theme
export const feenstraConfig: WidgetConfig = {
  theme: {
    name: 'Feenstra Red',
    gradientStart: '0 83% 53%',  // #ee2822
    gradientEnd: '356 56% 52%',  // #ce3b41
    textColor: '0 0% 100%',
    textMuted: '0 0% 100% / 0.95',
    glassBackground: '255 255 255 / 0.09',
    glassBorder: '255 255 255 / 0.25',
    accentColor: '142 76% 73%',
    ctaBackground: '0 0% 100%',
    ctaText: '0 83% 25%',
  },
  logo: {
    url: 'https://www.feenstra.com/_resources/themes/default/images/logo-feenstra-vertical.svg',
    alt: 'Feenstra logo',
    width: 96,
  },
  texts: {
    title: 'Energie Vandaag',
    subtitle: 'Real-time verbruiksmonitoring',
    co2Section: {
      title: 'Besparing CO2-uitstoot',
      value: '11.8 kg',
      description: 'Vandaag al bespaard door slim energiegebruik',
    },
    gasSection: {
      title: 'Besparing gasverbruik',
      value: '€ 2.95',
      description: 'Bespaard op gaskosten vandaag',
    },
    slimSturingSection: {
      title: 'Met Slim Sturing',
      subtitle: 'Jouw potentiële besparingen, vandaag',
      gasSaving: {
        label: 'Geld Bespaard',
        value: '€2.18',
        note: '33% reductie',
      },
      co2Saving: {
        label: 'CO₂ Bespaard',
        value: '4.8 kg',
        note: '38% minder uitstoot',
      },
      ctaText: 'Activeer Slim Sturing',
    },
    footer: 'Live updates • Powered by Feenstra Slim Sturing',
  },
};

// WarmteThuis theme
export const warmteThuisConfig: WidgetConfig = {
  theme: {
    name: 'WarmteThuis',
    gradientStart: '48 100% 52%',  // #ffc806
    gradientEnd: '206 31% 19%',    // #22313f
    textColor: '0 0% 100%',
    textMuted: '0 0% 100% / 0.95',
    glassBackground: '206 31% 19% / 0.85',  // Dark blue with higher opacity
    glassBorder: '0 0% 100% / 0.3',
    accentColor: '142 76% 73%',
    ctaBackground: '206 31% 19%',  // Dark blue CTA
    ctaText: '48 100% 52%',  // Yellow text on dark CTA
  },
  logo: {
    url: 'https://www.warmtethuis.nl/Files/Templates/Designs/Warmtethuis/Images/Logo_warmtethuis.svg',
    alt: 'WarmteThuis logo',
    width: 96,
  },
  texts: {
    title: 'Energie Dashboard',
    subtitle: 'Uw verbruik in realtime',
    co2Section: {
      title: 'Besparing CO2-uitstoot',
      value: '9.6 kg',
      description: 'Vandaag al bespaard door slim energiegebruik',
    },
    gasSection: {
      title: 'Besparing gasverbruik',
      value: '€ 2.65',
      description: 'Bespaard op gaskosten vandaag',
    },
    slimSturingSection: {
      title: 'Slimme Regeling',
      subtitle: 'Jouw potentiële besparingen, vandaag',
      gasSaving: {
        label: 'Geld Bespaard',
        value: '€2.15',
        note: '30% reductie',
      },
      co2Saving: {
        label: 'CO₂ Bespaard',
        value: '4.3 kg',
        note: '35% minder uitstoot',
      },
      ctaText: 'Activeer Slimme Regeling',
    },
    footer: 'Live updates • Powered by WarmteThuis',
  },
};

// Warmland theme
export const warmlandConfig: WidgetConfig = {
  theme: {
    name: 'Warmland',
    gradientStart: '24 91% 53%',   // #f47c1f
    gradientEnd: '24 91% 53%',       // hsla(0, 55%, 38%, 1.00)
    textColor: '220 9% 9%',
    textMuted: '0 0% 100% / 0.95',
    glassBackground: '255 255 255 / 0.09',
    glassBorder: '255 255 255 / 0.25',
    accentColor: '142 76% 73%',
    ctaBackground: '0 0% 100%',
    ctaText: '24 91% 25%',
  },
  logo: {
    url: 'https://warmland.nl/wp-content/uploads/Logo11.png',
    alt: 'Warmland logo',
    width: 96,
  },
  texts: {
    title: 'Energie Overzicht',
    subtitle: 'Uw dagelijkse verbruik',
    co2Section: {
      title: 'Besparing CO2-uitstoot',
      value: '10.2 kg',
      description: 'Vandaag al bespaard door slim energiegebruik',
    },
    gasSection: {
      title: 'Besparing gasverbruik',
      value: '€ 2.82',
      description: 'Bespaard op gaskosten vandaag',
    },
    slimSturingSection: {
      title: 'Intelligente Sturing',
      subtitle: 'Jouw potentiële besparingen, vandaag',
      gasSaving: {
        label: 'Geld Bespaard',
        value: '€2.28',
        note: '32% reductie',
      },
      co2Saving: {
        label: 'CO₂ Bespaard',
        value: '4.9 kg',
        note: '39% minder uitstoot',
      },
      ctaText: 'Activeer Intelligente Sturing',
    },
    footer: 'Live updates • Powered by Warmland',
  },
};

// Purple theme (Octopus style)
export const octopusConfig: WidgetConfig = {
  theme: {
    name: 'Octopus Purple',
    gradientStart: '252 86% 36%',
    gradientEnd: '314 100% 44%',
    textColor: '0 0% 100%',
    textMuted: '0 0% 100% / 0.95',
    glassBackground: '255 255 255 / 0.09',
    glassBorder: '255 255 255 / 0.25',
    accentColor: '142 76% 73%',
    ctaBackground: '0 0% 100%',
    ctaText: '252 86% 25%',
  },
  logo: {
    url: 'https://www.kemkens.nl/wp-content/uploads/2024/10/kemkens.svg',
    alt: 'Kemkens logo',
    width: 96,
  },
  texts: {
    title: 'Vandaag heb je al',
    subtitle: 'Realtime verbruiksmonitoring — transparant en vriendelijk 💜',
    co2Section: {
      title: 'Besparing CO2-uitstoot',
      value: '8.7 kg',
      description: 'Minder uitstoot door slim energiegebruik',
    },
    gasSection: {
      title: 'Besparing gasverbruik',
      value: '€ 2.65',
      description: 'Bespaard op gaskosten vandaag',
    },
    slimSturingSection: {
      title: 'Slim Sturing',
      subtitle: 'Jouw potentiële besparingen, vandaag',
      gasSaving: {
        label: 'Geld Bespaard',
        value: '€2.42',
        note: '~35% reductie door slim plannen',
      },
      co2Saving: {
        label: 'CO₂ Bespaard',
        value: '5.2 kg',
        note: 'Minder uitstoot, zelfde comfort',
      },
      ctaText: 'Activeer Slim Sturing',
    },
    footer: 'Live updates • Powered by Kemkens Slim Sturing',
  },
};

// Essent theme
export const essentConfig: WidgetConfig = {
  theme: {
    name: 'Essent',
    gradientStart: '333 98% 45%',
    gradientEnd: '333 98% 45%',
    textColor: '0 0% 100%',
    textMuted: '0 0% 100% / 0.95',
    glassBackground: '255 255 255 / 0.09',
    glassBorder: '255 255 255 / 0.25',
    accentColor: '142 76% 73%',
    ctaBackground: '0 0% 100%',
    ctaText: '333 98% 25%',
  },
  logo: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Essent_logo.svg/512px-Essent_logo.svg.png',
    alt: 'Essent logo',
    width: 96,
  },
  texts: {
    title: 'Energie Vandaag',
    subtitle: 'Real-time verbruiksmonitoring',
    co2Section: {
      title: 'Besparing CO2-uitstoot',
      value: '11.0 kg',
      description: 'Vandaag al bespaard door slim energiegebruik',
    },
    gasSection: {
      title: 'Besparing gasverbruik',
      value: '€ 3.05',
      description: 'Bespaard op gaskosten vandaag',
    },
    slimSturingSection: {
      title: 'Slim Sturing',
      subtitle: 'Jouw potentiële besparingen, vandaag',
      gasSaving: {
        label: 'Geld Bespaard',
        value: '€2.20',
        note: '≈33% reductie',
      },
      co2Saving: {
        label: 'CO₂ Bespaard',
        value: '4.6 kg',
        note: 'Minder uitstoot, zelfde comfort',
      },
      ctaText: 'Activeer Slim Sturing',
    },
    footer: 'Live updates • Powered by Essent',
  },
};

// Eneco theme
export const enecoConfig: WidgetConfig = {
  theme: {
    name: 'Eneco',
    gradientStart: '269 45% 25%',
    gradientEnd: '269 45% 30%',
    textColor: '0 0% 100%',
    textMuted: '0 0% 100% / 0.95',
    glassBackground: '255 255 255 / 0.09',
    glassBorder: '255 255 255 / 0.25',
    accentColor: '142 76% 73%',
    ctaBackground: '0 0% 100%',
    ctaText: '269 45% 25%',
  },
  logo: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Eneco_logo.png',
    alt: 'Eneco logo',
    width: 96,
  },
  texts: {
    title: 'Energie Vandaag',
    subtitle: 'Real-time verbruiksmonitoring',
    co2Section: {
      title: 'Besparing CO2-uitstoot',
      value: '10.4 kg',
      description: 'Vandaag al bespaard door slim energiegebruik',
    },
    gasSection: {
      title: 'Besparing gasverbruik',
      value: '€ 3.00',
      description: 'Bespaard op gaskosten vandaag',
    },
    slimSturingSection: {
      title: 'Slim Sturing',
      subtitle: 'Jouw potentiële besparingen, vandaag',
      gasSaving: {
        label: 'Geld Bespaard',
        value: '€2.10',
        note: '≈32% reductie',
      },
      co2Saving: {
        label: 'CO₂ Bespaard',
        value: '4.5 kg',
        note: 'Minder uitstoot, zelfde comfort',
      },
      ctaText: 'Activeer Slim Sturing',
    },
    footer: 'Live updates • Powered by Eneco',
  },
};

// HeatTransformers theme
export const heatTransformersConfig: WidgetConfig = {
  theme: {
    name: 'HeatTransformers',
    gradientStart: '220 89% 43%',
    gradientEnd: '220 89% 43%',
    textColor: '0 0% 100%',
    textMuted: '0 0% 100% / 0.95',
    glassBackground: '255 255 255 / 0.09',
    glassBorder: '255 255 255 / 0.25',
    accentColor: '142 76% 73%',
    ctaBackground: '0 0% 100%',
    ctaText: '220 89% 25%',
  },
  logo: {
    url: 'https://cdn.prod.website-files.com/6672a42c875741950cee6732/66eaca262dd3becdcdb2e0fb_HeatTransformers%20Logo-p-500.png',
    alt: 'HeatTransformers logo',
    width: 120,
  },
  texts: {
    title: 'Energie Vandaag',
    subtitle: 'Real-time verbruiksmonitoring',
    co2Section: {
      title: 'Besparing CO2-uitstoot',
      value: '10.8 kg',
      description: 'Vandaag al bespaard door slim energiegebruik',
    },
    gasSection: {
      title: 'Besparing gasverbruik',
      value: '€ 3.10',
      description: 'Bespaard op gaskosten vandaag',
    },
    slimSturingSection: {
      title: 'Slim Sturing',
      subtitle: 'Jouw potentiële besparingen, vandaag',
      gasSaving: {
        label: 'Geld Bespaard',
        value: '€2.22',
        note: '≈33% reductie',
      },
      co2Saving: {
        label: 'CO₂ Bespaard',
        value: '4.7 kg',
        note: 'Minder uitstoot, zelfde comfort',
      },
      ctaText: 'Activeer Slim Sturing',
    },
    footer: 'Live updates • Powered by HeatTransformers',
  },
};

// Baxi theme
export const baxiConfig: WidgetConfig = {
  theme: {
    name: 'Baxi',
    gradientStart: '204 100% 30%',
    gradientEnd: '204 100% 30%',
    textColor: '0 0% 100%',
    textMuted: '0 0% 100% / 0.95',
    glassBackground: '255 255 255 / 0.09',
    glassBorder: '255 255 255 / 0.25',
    accentColor: '142 76% 73%',
    ctaBackground: '0 0% 100%',
    ctaText: '204 100% 20%',
  },
  logo: {
    url: 'https://www.baxiboilers.com/sites/default/files/baxi-logo.png',
    alt: 'Baxi logo',
    width: 120,
  },
  texts: {
    title: 'Energie Vandaag',
    subtitle: 'Real-time verbruiksmonitoring',
    co2Section: {
      title: 'Besparing CO2-uitstoot',
      value: '10.9 kg',
      description: 'Vandaag al bespaard door slim energiegebruik',
    },
    gasSection: {
      title: 'Besparing gasverbruik',
      value: '€ 3.12',
      description: 'Bespaard op gaskosten vandaag',
    },
    slimSturingSection: {
      title: 'Slim Sturing',
      subtitle: 'Jouw potentiële besparingen, vandaag',
      gasSaving: {
        label: 'Geld Bespaard',
        value: '€2.25',
        note: '≈33% reductie',
      },
      co2Saving: {
        label: 'CO₂ Bespaard',
        value: '4.8 kg',
        note: 'Minder uitstoot, zelfde comfort',
      },
      ctaText: 'Activeer Slim Sturing',
    },
    footer: 'Live updates • Powered by Baxi',
  },
};

// De Dietrich theme (Nordic, clean)
export const deDietrichConfig: WidgetConfig = {
  theme: {
    name: 'De Dietrich',
    // Swap accent and gradient: light background, dark accent
    gradientStart: '0 0% 100%',
    gradientEnd: '0 0% 82%',
    textColor: '233 17% 21%',
    textMuted: '233 17% 35%',
    // Softer light cards with subtle border for a clean look
    glassBackground: '0 0% 100% / 0.7',
    glassBorder: '233 17% 21% / 0.15',
    accentColor: '0 0% 82%',
    ctaBackground: '233 17% 21%',
    ctaText: '0 0% 100%',
  },
  logo: {
    url: 'https://www.dedietrich.be/wp-content/themes/pandafish/img/new_logo_nl.png?v=1',
    alt: 'De Dietrich logo',
    width: 120,
  },
  texts: {
    title: 'Energie Vandaag',
    subtitle: 'Een rustige, heldere weergave',
    co2Section: {
      title: 'Besparing CO2-uitstoot',
      value: '10.1 kg',
      description: 'Vandaag al bespaard door slim energiegebruik',
    },
    gasSection: {
      title: 'Besparing gasverbruik',
      value: '€ 2.96',
      description: 'Bespaard op gaskosten vandaag',
    },
    slimSturingSection: {
      title: 'Slim Sturing',
      subtitle: 'Jouw potentiële besparingen, vandaag',
      gasSaving: {
        label: 'Geld Bespaard',
        value: '€2.08',
        note: 'Efficiënt en comfortabel',
      },
      co2Saving: {
        label: 'CO₂ Bespaard',
        value: '4.2 kg',
        note: 'Schonere keuze, hetzelfde comfort',
      },
      ctaText: 'Activeer Slim Sturing',
    },
    footer: 'Live updates • Powered by De Dietrich',
  },
};

export const presetConfigs = {
  remeha: remehaConfig,
  kemkens: kemkensConfig,
  feenstra: feenstraConfig,
  warmtethuis: warmteThuisConfig,
  fctwente: fcTwenteConfig,
  eneco: enecoConfig,
  warmland: warmlandConfig,
  octopus: octopusConfig,
  essent: essentConfig,
  heattransformers: heatTransformersConfig,
  baxi: baxiConfig,
  dedietrich: deDietrichConfig,
  apple: appleConfig,
};
