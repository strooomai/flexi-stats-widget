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
  octopus: octopusConfig,
};