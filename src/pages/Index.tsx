import React, { useState } from 'react';
import { EnergyWidget } from '@/components/EnergyWidget';
import { WidgetConfigurator } from '@/components/WidgetConfigurator';
import { presetConfigs } from '@/config/widgetPresets';
import { WidgetConfig } from '@/types/widget';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [currentConfig, setCurrentConfig] = useState<WidgetConfig>(presetConfigs.kemkens);
  const [showConfigurator, setShowConfigurator] = useState(false);

  const loadPreset = (presetName: string) => {
    setCurrentConfig(presetConfigs[presetName as keyof typeof presetConfigs]);
  };

  const exportConfig = () => {
    const configJson = JSON.stringify(currentConfig, null, 2);
    const blob = new Blob([configJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'widget-config.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Remeha Energy Widget Configurator</h1>
              <p className="text-muted-foreground">Customize your white-label energy widget</p>
            </div>
            <div className="flex items-center gap-4">
              <Select onValueChange={loadPreset} defaultValue="kemkens">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Load preset" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kemkens">Kemkens</SelectItem>
                  <SelectItem value="feenstra">Feenstra</SelectItem>
                  <SelectItem value="warmtethuis">WarmteThuis</SelectItem>
                  <SelectItem value="warmland">Warmland</SelectItem>
                  <SelectItem value="octopus">Octopus</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                variant="outline" 
                onClick={() => setShowConfigurator(!showConfigurator)}
              >
                {showConfigurator ? 'Hide' : 'Show'} Configurator
              </Button>
              <Button onClick={exportConfig}>
                Export Config
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Widget Preview */}
          <div className="order-2 lg:order-1">
            <Card>
              <CardHeader>
                <CardTitle>Widget Preview</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <EnergyWidget config={currentConfig} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Configurator */}
          {showConfigurator && (
            <div className="order-1 lg:order-2">
              <WidgetConfigurator 
                config={currentConfig}
                onConfigChange={setCurrentConfig}
              />
            </div>
          )}
        </div>

        {/* Preset Examples - Square Layout */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">Preset Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="aspect-square">
              <CardHeader className="pb-3">
                <CardTitle className="text-pink-600 text-base">Kemkens</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
                  <div className="transform scale-50 origin-center w-full">
                    <EnergyWidget config={presetConfigs.kemkens} />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="aspect-square">
              <CardHeader className="pb-3">
                <CardTitle className="text-red-600 text-base">Feenstra</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
                  <div className="transform scale-50 origin-center w-full">
                    <EnergyWidget config={presetConfigs.feenstra} />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="aspect-square">
              <CardHeader className="pb-3">
                <CardTitle className="text-yellow-600 text-base">WarmteThuis</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
                  <div className="transform scale-50 origin-center w-full">
                    <EnergyWidget config={presetConfigs.warmtethuis} />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="aspect-square">
              <CardHeader className="pb-3">
                <CardTitle className="text-orange-600 text-base">Warmland</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
                  <div className="transform scale-50 origin-center w-full">
                    <EnergyWidget config={presetConfigs.warmland} />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="aspect-square">
              <CardHeader className="pb-3">
                <CardTitle className="text-purple-600 text-base">Octopus</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
                  <div className="transform scale-50 origin-center w-full">
                    <EnergyWidget config={presetConfigs.octopus} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;