import React, { useState } from 'react';
import { WidgetConfig } from '@/types/widget';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface WidgetConfiguratorProps {
  config: WidgetConfig;
  onConfigChange: (config: WidgetConfig) => void;
}

export const WidgetConfigurator: React.FC<WidgetConfiguratorProps> = ({
  config,
  onConfigChange,
}) => {
  const updateConfig = (path: string, value: any) => {
    const newConfig = { ...config };
    const keys = path.split('.');
    let current: any = newConfig;
    
    for (let i = 0; i < keys.length - 1; i++) {
      if (!(keys[i] in current)) current[keys[i]] = {};
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
    onConfigChange(newConfig);
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Widget Configurator</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="theme" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="theme">Theme</TabsTrigger>
            <TabsTrigger value="logo">Logo</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="savings">Savings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="theme" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="gradientStart">Gradient Start (HSL)</Label>
                <Input
                  id="gradientStart"
                  value={config.theme.gradientStart}
                  onChange={(e) => updateConfig('theme.gradientStart', e.target.value)}
                  placeholder="347 77% 60%"
                />
              </div>
              <div>
                <Label htmlFor="gradientEnd">Gradient End (HSL)</Label>
                <Input
                  id="gradientEnd"
                  value={config.theme.gradientEnd}
                  onChange={(e) => updateConfig('theme.gradientEnd', e.target.value)}
                  placeholder="327 73% 73%"
                />
              </div>
              <div>
                <Label htmlFor="accentColor">Accent Color (HSL)</Label>
                <Input
                  id="accentColor"
                  value={config.theme.accentColor}
                  onChange={(e) => updateConfig('theme.accentColor', e.target.value)}
                  placeholder="142 76% 73%"
                />
              </div>
              <div>
                <Label htmlFor="ctaBackground">CTA Background (HSL)</Label>
                <Input
                  id="ctaBackground"
                  value={config.theme.ctaBackground}
                  onChange={(e) => updateConfig('theme.ctaBackground', e.target.value)}
                  placeholder="0 0% 100%"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="logo" className="space-y-4">
            <div>
              <Label htmlFor="logoUrl">Logo URL</Label>
              <Input
                id="logoUrl"
                value={config.logo.url}
                onChange={(e) => updateConfig('logo.url', e.target.value)}
                placeholder="https://example.com/logo.svg"
              />
            </div>
            <div>
              <Label htmlFor="logoAlt">Logo Alt Text</Label>
              <Input
                id="logoAlt"
                value={config.logo.alt}
                onChange={(e) => updateConfig('logo.alt', e.target.value)}
                placeholder="Company logo"
              />
            </div>
            <div>
              <Label htmlFor="logoWidth">Logo Width (px)</Label>
              <Input
                id="logoWidth"
                type="number"
                value={config.logo.width || ''}
                onChange={(e) => updateConfig('logo.width', parseInt(e.target.value) || undefined)}
                placeholder="96"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="content" className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={config.texts.title}
                onChange={(e) => updateConfig('texts.title', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="subtitle">Subtitle</Label>
              <Textarea
                id="subtitle"
                value={config.texts.subtitle}
                onChange={(e) => updateConfig('texts.subtitle', e.target.value)}
                rows={2}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="co2Title">CO2 Section Title</Label>
                <Input
                  id="co2Title"
                  value={config.texts.co2Section.title}
                  onChange={(e) => updateConfig('texts.co2Section.title', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="gasTitle">Gas Section Title</Label>
                <Input
                  id="gasTitle"
                  value={config.texts.gasSection.title}
                  onChange={(e) => updateConfig('texts.gasSection.title', e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="footer">Footer Text</Label>
              <Input
                id="footer"
                value={config.texts.footer}
                onChange={(e) => updateConfig('texts.footer', e.target.value)}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="savings" className="space-y-4">
            <div className="space-y-4">
              <h4 className="font-semibold">Current Savings</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="co2Value">CO2 Saving Value</Label>
                  <Input
                    id="co2Value"
                    value={config.texts.co2Section.value}
                    onChange={(e) => updateConfig('texts.co2Section.value', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="gasValue">Gas Saving Value</Label>
                  <Input
                    id="gasValue"
                    value={config.texts.gasSection.value}
                    onChange={(e) => updateConfig('texts.gasSection.value', e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Slim Sturing Section</h4>
              <div>
                <Label htmlFor="slimTitle">Section Title</Label>
                <Input
                  id="slimTitle"
                  value={config.texts.slimSturingSection.title}
                  onChange={(e) => updateConfig('texts.slimSturingSection.title', e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="gasSavingValue">Gas Saving Value</Label>
                  <Input
                    id="gasSavingValue"
                    value={config.texts.slimSturingSection.gasSaving.value}
                    onChange={(e) => updateConfig('texts.slimSturingSection.gasSaving.value', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="co2SavingValue">CO2 Saving Value</Label>
                  <Input
                    id="co2SavingValue"
                    value={config.texts.slimSturingSection.co2Saving.value}
                    onChange={(e) => updateConfig('texts.slimSturingSection.co2Saving.value', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="ctaText">CTA Button Text</Label>
                <Input
                  id="ctaText"
                  value={config.texts.slimSturingSection.ctaText}
                  onChange={(e) => updateConfig('texts.slimSturingSection.ctaText', e.target.value)}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};