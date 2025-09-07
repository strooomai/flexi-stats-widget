import React from 'react';
import { WidgetConfig } from '@/types/widget';
import { Leaf, Euro, Zap } from 'lucide-react';

interface EnergyWidgetProps {
  config: WidgetConfig;
}

export const EnergyWidget: React.FC<EnergyWidgetProps> = ({ config }) => {
  const { theme, logo, texts } = config;

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
  } as React.CSSProperties;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div 
        className="widget-card max-w-md w-full min-h-[600px] rounded-[var(--card-radius)] p-6 flex flex-col gap-6 shadow-2xl relative overflow-hidden"
        style={widgetStyle}
      >
        {/* Decorative blob */}
        <div className="widget-blob absolute -right-28 -bottom-28 w-72 h-72 rounded-full opacity-30 blur-sm pointer-events-none" />
        
        {/* Header */}
        <header className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="live-indicator flex items-center gap-2 bg-[hsl(var(--widget-glass))] border border-[hsl(var(--widget-glass-border))] rounded-full px-3 py-1.5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--widget-accent))] shadow-[0_0_0_3px_hsl(var(--widget-accent)/0.25)]" />
              <span className="text-xs font-bold text-[hsl(var(--widget-text))]">Live</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[hsl(var(--widget-text))] leading-tight mb-2">
            {texts.title}
          </h1>
          <p className="text-sm text-[hsl(var(--widget-text-muted))] leading-relaxed">
            {texts.subtitle}
          </p>
        </header>

        {/* Current Savings Section */}
        <section className="glass-card bg-[hsl(var(--widget-glass))] border border-[hsl(var(--widget-glass-border))] rounded-[var(--inner-radius)] p-5 backdrop-blur-sm relative z-10">
          <h2 className="text-lg font-bold text-[hsl(var(--widget-text))] mb-4">Huidige Besparingen</h2>
          
          <div className="grid grid-cols-1 gap-4">
            {/* CO2 Savings */}
            <div className="saving-item">
              <div className="flex items-center gap-2 mb-2">
                <Leaf className="w-5 h-5 text-[hsl(var(--widget-accent))]" />
                <span className="text-xs font-bold text-[hsl(var(--widget-text-muted))] uppercase tracking-wider">
                  {texts.co2Section.title}
                </span>
              </div>
              <div className="text-2xl font-bold text-[hsl(var(--widget-text))] mb-1">
                {texts.co2Section.value}
              </div>
              <div className="text-xs text-[hsl(var(--widget-text-muted))]">
                {texts.co2Section.description}
              </div>
            </div>

            {/* Gas Savings */}
            <div className="saving-item">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-[hsl(var(--widget-accent))]" />
                <span className="text-xs font-bold text-[hsl(var(--widget-text-muted))] uppercase tracking-wider">
                  {texts.gasSection.title}
                </span>
              </div>
              <div className="text-2xl font-bold text-[hsl(var(--widget-text))] mb-1">
                {texts.gasSection.value}
              </div>
              <div className="text-xs text-[hsl(var(--widget-text-muted))]">
                {texts.gasSection.description}
              </div>
            </div>
          </div>
        </section>

        {/* Slim Sturing Section */}
        <section className="glass-card bg-[hsl(var(--widget-glass))] border border-[hsl(var(--widget-glass-border))] rounded-[var(--inner-radius)] p-5 backdrop-blur-sm relative z-10">
          <h2 className="text-lg font-bold text-[hsl(var(--widget-text))] mb-1">
            {texts.slimSturingSection.title}
          </h2>
          <p className="text-sm text-[hsl(var(--widget-text-muted))] mb-4">
            {texts.slimSturingSection.subtitle}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Gas Saving */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Euro className="w-4 h-4 text-[hsl(var(--widget-text))]" />
                <span className="text-xs font-bold text-[hsl(var(--widget-text-muted))] uppercase tracking-wider">
                  {texts.slimSturingSection.gasSaving.label}
                </span>
              </div>
              <div className="text-xl font-bold text-[hsl(var(--widget-text))] mb-1">
                {texts.slimSturingSection.gasSaving.value}
              </div>
              <div className="text-xs text-[hsl(var(--widget-text-muted))]">
                {texts.slimSturingSection.gasSaving.note}
              </div>
            </div>

            {/* CO2 Saving */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Leaf className="w-4 h-4 text-[hsl(var(--widget-text))]" />
                <span className="text-xs font-bold text-[hsl(var(--widget-text-muted))] uppercase tracking-wider">
                  {texts.slimSturingSection.co2Saving.label}
                </span>
              </div>
              <div className="text-xl font-bold text-[hsl(var(--widget-text))] mb-1">
                {texts.slimSturingSection.co2Saving.value}
              </div>
              <div className="text-xs text-[hsl(var(--widget-text-muted))]">
                {texts.slimSturingSection.co2Saving.note}
              </div>
            </div>
          </div>

          <button className="w-full bg-[hsl(var(--widget-cta-bg))] text-[hsl(var(--widget-cta-text))] font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5">
            {texts.slimSturingSection.ctaText}
          </button>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-[hsl(var(--widget-text-muted))] mt-auto relative z-10 flex flex-col items-center gap-2">
          <p>{texts.footer}</p>
          {logo.url && (
            <img 
              src={logo.url} 
              alt={logo.alt} 
              className="h-6 opacity-90 drop-shadow-sm"
              style={{ width: logo.width ? `${logo.width}px` : 'auto' }}
            />
          )}
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .widget-card {
            background: linear-gradient(135deg, hsl(var(--widget-gradient-start)) 0%, hsl(var(--widget-gradient-end)) 100%);
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
          }
          
          .widget-blob {
            background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), rgba(255,255,255,0) 60%);
          }
        `
      }} />
    </div>
  );
};