export interface WidgetTheme {
  name: string;
  gradientStart: string;
  gradientEnd: string;
  textColor: string;
  textMuted: string;
  glassBackground: string;
  glassBorder: string;
  accentColor: string;
  ctaBackground: string;
  ctaText: string;
  // Optional fine-grained controls
  accentText?: string; // text color when on accent backgrounds (e.g., selected chips)
  periodText?: string; // text color for Dag/Maand/Jaar chips (unselected)
  cardText?: string; // primary text color inside glass cards
  cardTextMuted?: string; // muted text color inside glass cards
}

export interface WidgetConfig {
  theme: WidgetTheme;
  logo: {
    url: string;
    alt: string;
    width?: number;
  };
  texts: {
    title: string;
    subtitle: string;
    co2Section: {
      title: string;
      value: string;
      description: string;
    };
    gasSection: {
      title: string;
      value: string;
      description: string;
    };
    slimSturingSection: {
      title: string;
      subtitle: string;
      gasSaving: {
        label: string;
        value: string;
        note: string;
      };
      co2Saving: {
        label: string;
        value: string;
        note: string;
      };
      ctaText: string;
    };
    footer: string;
  };
}

export interface SavingsData {
  co2Reduction: number;
  gasReduction: number;
  gasSavingEuros: string;
  co2SavingKg: string;
}
