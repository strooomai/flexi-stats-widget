import React, { useState } from 'react';
import { WidgetConfig } from '@/types/widget';
import { Leaf, Euro, Zap } from 'lucide-react';

interface EnergyWidgetProps {
  config: WidgetConfig;
}

export const EnergyWidget: React.FC<EnergyWidgetProps> = ({ config }) => {
  const { theme, logo, texts } = config;
  const [selectedPeriod, setSelectedPeriod] = useState<'Dag' | 'Maand' | 'Jaar'>('Dag');

  // Calculate multiplier based on selected period
  const getMultiplier = () => {
    switch (selectedPeriod) {
      case 'Maand': return 20;
      case 'Jaar': return 220;
      default: return 1;
    }
  };

  // Helper function to multiply values in text
  const multiplyValue = (text: string, multiplier: number) => {
    return text.replace(/(\d+\.?\d*)/g, (match) => {
      const num = parseFloat(match);
      const result = num * multiplier;
      return result % 1 === 0 ? result.toString() : result.toFixed(1);
    });
  };

  const multiplier = getMultiplier();

  // Apply theme CSS variables
  const widgetStyle = {
    '--widget-gradient-start': theme.gradientStart,
    '--widget-gradient-end': theme.gradientEnd,
    '--widget-text': theme.textColor,
    '--widget-text-muted': theme.textMuted,
    '--widget-glass': theme.glassBackground,
    '--widget-glass-border': theme.glassBorder,
    '--widget-accent': theme.accentColor,
    '--widget-cta-bg': theme.ctaBackground,
    '--widget-cta-text': theme.ctaText,
    '--card-radius': '24px',
    '--inner-radius': '18px',
    '--pad': '24px',
    '--gap-lg': '24px',
    '--gap-md': '14px',
  } as React.CSSProperties;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div 
        className="widget-card max-w-[560px] w-full min-h-[600px] rounded-[var(--card-radius)] p-[var(--pad)] flex flex-col gap-[var(--gap-lg)] shadow-2xl relative overflow-hidden"
        style={widgetStyle}
      >
        {/* Decorative blob */}
        <div className="widget-blob absolute -right-[120px] -bottom-[120px] w-[360px] h-[360px] rounded-full blur-md pointer-events-none" />
        
        {/* Header */}
        <header className="relative z-10">
          <div className="flex justify-between items-start mb-3">
            <div className="live-indicator flex items-center gap-2 bg-[hsl(var(--widget-glass))] border border-[hsl(var(--widget-glass-border))] rounded-full px-[10px] py-[6px] backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#4CFF7A] shadow-[0_0_0_3px_rgba(76,255,122,0.25)]" />
              <span className="text-xs font-bold text-[hsl(var(--widget-text))] leading-none">Live</span>
            </div>
          </div>
          <h1 className="text-[28px] leading-[34px] font-extrabold text-[hsl(var(--widget-text))] mb-[6px] tracking-[-0.01em]">
            {texts.title}
          </h1>
          <p className="text-sm leading-5 text-[hsl(var(--widget-text-muted))] opacity-95">
            {texts.subtitle}
          </p>
        </header>

        {/* Current Consumption Metrics */}
        <section className="flex flex-col items-center gap-4 py-3 text-center relative z-10">
          <div className="grid grid-cols-2 gap-8 w-full max-w-md">
            {/* Electricity */}
            <div className="flex flex-col items-center gap-1">
              <div className="text-[42px] leading-[48px] font-extrabold text-[hsl(var(--widget-text))] tracking-[-0.02em]">
                {multiplyValue('24.7 kWh', multiplier)}
              </div>
              <div className="text-lg leading-[24px] font-semibold text-[hsl(var(--widget-text))] opacity-95">
                {multiplyValue('€ 6.93', multiplier)}
              </div>
            </div>
            {/* Gas */}
            <div className="flex flex-col items-center gap-1">
              <div className="text-[42px] leading-[48px] font-extrabold text-[hsl(var(--widget-text))] tracking-[-0.02em]">
                {multiplyValue('8.3 m³', multiplier)}
              </div>
              <div className="text-lg leading-[24px] font-semibold text-[hsl(var(--widget-text))] opacity-95">
                {multiplyValue('€ 9.12', multiplier)}
              </div>
            </div>
          </div>
          <div className="text-sm opacity-95 bg-[hsl(var(--widget-glass))] px-3 py-2 rounded-[10px] max-w-xs">
            Lekker bezig! Met <strong>Slim Sturing</strong> hou je je kosten en CO₂ moeiteloos in toom.
          </div>
        </section>

        {/* Current Savings Section */}
        <section className="glass-card bg-[hsl(var(--widget-glass))] border border-[hsl(var(--widget-glass-border))] rounded-[var(--inner-radius)] p-5 backdrop-blur-sm relative z-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[22px] font-extrabold text-[hsl(var(--widget-text))] tracking-[-0.01em]">
              Huidige Besparingen
            </h2>
            <div className="flex gap-2 text-xs">
              {(['Dag', 'Maand', 'Jaar'] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                    selectedPeriod === period
                      ? 'bg-[hsl(var(--widget-accent))] text-[hsl(var(--widget-text))]'
                      : 'text-[hsl(var(--widget-text-muted))] opacity-70 hover:opacity-100'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {/* CO2 Savings */}
            <div className="saving-item">
              <div className="text-[13px] font-bold text-[hsl(var(--widget-text-muted))] uppercase tracking-[0.04em] opacity-95 mb-[6px]">
                {texts.co2Section.title}
              </div>
              <div className="flex items-center gap-2 text-[30px] font-extrabold text-[hsl(var(--widget-text))] mb-1">
                <Leaf className="w-[22px] h-[22px]" />
                {multiplyValue(texts.co2Section.value, multiplier)}
              </div>
              <div className="text-xs text-[hsl(var(--widget-text-muted))] opacity-95">
                {texts.co2Section.description}
              </div>
            </div>

            {/* Gas Savings */}
            <div className="saving-item">
              <div className="text-[13px] font-bold text-[hsl(var(--widget-text-muted))] uppercase tracking-[0.04em] opacity-95 mb-[6px]">
                {texts.gasSection.title}
              </div>
              <div className="flex items-center gap-2 text-[30px] font-extrabold text-[hsl(var(--widget-text))] mb-1">
                <Zap className="w-[22px] h-[22px]" />
                {multiplyValue(texts.gasSection.value, multiplier)}
              </div>
              <div className="text-xs text-[hsl(var(--widget-text-muted))] opacity-95">
                {texts.gasSection.description}
              </div>
            </div>
          </div>
        </section>

        {/* Slim Sturing Section */}
        <section className="glass-card bg-[hsl(var(--widget-glass))] border border-[hsl(var(--widget-glass-border))] rounded-[var(--inner-radius)] p-5 backdrop-blur-sm relative z-10">
          <h2 className="text-[22px] font-extrabold text-[hsl(var(--widget-text))] mb-1 tracking-[-0.01em]">
            {texts.slimSturingSection.title}
          </h2>
          <p className="text-sm text-[hsl(var(--widget-text-muted))] opacity-95 mb-[var(--gap-md)]">
            {texts.slimSturingSection.subtitle}
          </p>

          <div className="flex gap-6 flex-wrap mb-[6px]">
            {/* Gas Saving */}
            <div className="flex flex-col gap-[6px] min-w-[180px] flex-1">
              <div className="text-[13px] font-bold text-[hsl(var(--widget-text-muted))] uppercase tracking-[0.04em] opacity-95">
                {texts.slimSturingSection.gasSaving.label}
              </div>
              <div className="flex items-center gap-2 text-[30px] font-extrabold text-[hsl(var(--widget-text))]">
                <Euro className="w-[22px] h-[22px]" />
                {multiplyValue(texts.slimSturingSection.gasSaving.value, multiplier)}
              </div>
              <div className="text-xs text-[hsl(var(--widget-text-muted))] opacity-95">
                {texts.slimSturingSection.gasSaving.note}
              </div>
            </div>

            {/* CO2 Saving */}
            <div className="flex flex-col gap-[6px] min-w-[180px] flex-1">
              <div className="text-[13px] font-bold text-[hsl(var(--widget-text-muted))] uppercase tracking-[0.04em] opacity-95">
                {texts.slimSturingSection.co2Saving.label}
              </div>
              <div className="flex items-center gap-2 text-[30px] font-extrabold text-[hsl(var(--widget-text))]">
                <Leaf className="w-[22px] h-[22px]" />
                {multiplyValue(texts.slimSturingSection.co2Saving.value, multiplier)}
              </div>
              <div className="text-xs text-[hsl(var(--widget-text-muted))] opacity-95">
                {texts.slimSturingSection.co2Saving.note}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-[6px]">
            <button className="inline-flex items-center gap-[10px] font-bold text-sm bg-[hsl(var(--widget-cta-bg))] text-[hsl(var(--widget-cta-text))] border-none rounded-xl py-[10px] px-[14px] cursor-pointer shadow-[0_6px_18px_rgba(0,0,0,0.15)] transition-transform duration-200 hover:-translate-y-0.5">
              {texts.slimSturingSection.ctaText}
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-[hsl(var(--widget-text-muted))] opacity-95 mt-auto relative z-10 flex flex-col items-center gap-2">
          <p>{texts.footer}</p>
          {logo.url && (
            <img 
              src={logo.url} 
              alt={logo.alt} 
              className="w-24 h-auto opacity-90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]"
              style={{ width: logo.width ? `${logo.width}px` : '96px' }}
            />
          )}
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .widget-card {
            background: linear-gradient(135deg, hsl(var(--widget-gradient-start)) 0%, hsl(var(--widget-gradient-end)) 100%);
            font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
            box-shadow: 0 18px 38px rgba(23, 10, 63, 0.28);
          }
          
          .widget-blob {
            background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), rgba(255,255,255,0) 60%);
            filter: blur(6px);
          }
        `
      }} />
    </div>
  );
};