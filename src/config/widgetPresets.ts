import { WidgetConfig } from '@/types/widget';

// Pink theme (Kemkens style)
export const kemkensConfig: WidgetConfig = {
  theme: {
    name: 'Kemkens Pink',
    gradientStart: '347 77% 60%',
    gradientEnd: '327 73% 73%',
    textColor: '0 0% 100%',
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
      value: '34%',
      description: 'Je bespaart ca. 34% op je gasverbruik',
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
      value: '32%',
      description: 'Je bespaart ca. 32% op je gasverbruik',
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
    glassBackground: '255 255 255 / 0.09',
    glassBorder: '255 255 255 / 0.25',
    accentColor: '142 76% 73%',
    ctaBackground: '0 0% 100%',
    ctaText: '206 31% 19%',
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
      value: '28%',
      description: 'Je bespaart ca. 28% op je gasverbruik',
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
    gradientEnd: '0 0% 95%',       // #f1f1f1
    textColor: '0 0% 100%',
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
      value: '31%',
      description: 'Je bespaart ca. 31% op je gasverbruik',
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
      value: '29%',
      description: 'Je bespaart ca. 29% op je gasverbruik',
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

export const presetConfigs = {
  kemkens: kemkensConfig,
  feenstra: feenstraConfig,
  warmtethuis: warmteThuisConfig,
  warmland: warmlandConfig,
  octopus: octopusConfig,
};