import React, { useState } from 'react';
import { EnergyWidget } from '@/components/EnergyWidget';
import { WidgetConfigurator } from '@/components/WidgetConfigurator';
import { presetConfigs } from '@/config/widgetPresets';
import { WidgetConfig } from '@/types/widget';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Command, CommandGroup, CommandItem, CommandInput, CommandList, CommandEmpty } from '@/components/ui/command';
import { Checkbox } from '@/components/ui/checkbox';
// Mode dropdown uses Select
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [currentConfig, setCurrentConfig] = useState<WidgetConfig>(presetConfigs.remeha);
  const [mode, setMode] = useState<'default' | 'hybrid'>('default');
  const [featuresOpen, setFeaturesOpen] = useState(false);
  
  // Setup state
  const [heatPumpType, setHeatPumpType] = useState<'gas' | 'hybrid'>('gas');
  const [hasBattery, setHasBattery] = useState(false);
  const [hasWaterTank, setHasWaterTank] = useState(false);
  const [hasAirCo, setHasAirCo] = useState(false);

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
              <Select onValueChange={loadPreset} defaultValue="remeha">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Load preset" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remeha">Remeha</SelectItem>
                  <SelectItem value="kemkens">Kemkens</SelectItem>
                  <SelectItem value="essent">Essent</SelectItem>
                  <SelectItem value="dedietrich">De Dietrich</SelectItem>
                  <SelectItem value="heattransformers">HeatTransformers</SelectItem>                                    
                  <SelectItem value="feenstra">Feenstra</SelectItem>
                  <SelectItem value="fctwente">FC Twente</SelectItem>
                  <SelectItem value="eneco">Eneco</SelectItem>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="baxi">Baxi</SelectItem>
                  <SelectItem value="warmtethuis">WarmteThuis</SelectItem>                  
                  <SelectItem value="warmland">Warmland</SelectItem>
                  <SelectItem value="octopus">Octopus</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={(v) => setMode(v as 'default' | 'hybrid')} value={mode}>
                <SelectTrigger className="w-56">
                  <SelectValue placeholder="Mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Gas Only</SelectItem>
                  <SelectItem value="hybrid">Hybrid Heat pump</SelectItem>
                </SelectContent>
              </Select>
              {/* Additional Features combobox */}
              <Popover open={featuresOpen} onOpenChange={setFeaturesOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-56 justify-between" role="combobox" aria-expanded={featuresOpen}>
                    Additional Features
                    <span className="text-xs text-muted-foreground">
                      {[hasBattery, hasWaterTank, hasAirCo].filter(Boolean).length || 'None'} selected
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-0">
                  <Command>
                    <CommandInput placeholder="Filter features..." />
                    <CommandList>
                      <CommandEmpty>No features found.</CommandEmpty>
                      <CommandGroup heading="Select features">
                        <CommandItem className="flex items-center gap-3" onSelect={() => setHasBattery(!hasBattery)}>
                          <Checkbox checked={hasBattery} onCheckedChange={() => setHasBattery(!hasBattery)} />
                          <span>Has Battery</span>
                        </CommandItem>
                        <CommandItem className="flex items-center gap-3" onSelect={() => setHasWaterTank(!hasWaterTank)}>
                          <Checkbox checked={hasWaterTank} onCheckedChange={() => setHasWaterTank(!hasWaterTank)} />
                          <span>Has Water Tank</span>
                        </CommandItem>
                        <CommandItem className="flex items-center gap-3" onSelect={() => setHasAirCo(!hasAirCo)}>
                          <Checkbox checked={hasAirCo} onCheckedChange={() => setHasAirCo(!hasAirCo)} />
                          <span>Has Air Co</span>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <Button onClick={exportConfig}>
                Export Config
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Setup Selection */}
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Widget Preview */}
          <div className="order-2 lg:order-1">
            <Card>
              <CardHeader>
                <CardTitle>Widget Preview</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <EnergyWidget config={currentConfig} mode={mode} embed />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Configurator - always visible */}
          <div className="order-1 lg:order-2">
            <WidgetConfigurator 
              config={currentConfig}
              onConfigChange={setCurrentConfig}
            />
          </div>
        </div>

        {/* Preset Examples - Square Layout */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">Preset Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="aspect-square">
              <CardHeader className="pb-3">
                <CardTitle className="text-yellow-500 text-base">Remeha</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
                  <div className="transform scale-50 origin-center w-full">
                  <EnergyWidget config={presetConfigs.remeha} mode="hybrid" embed />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="aspect-square">
              <CardHeader className="pb-3">
                <CardTitle className="text-pink-600 text-base">Kemkens</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
                  <div className="transform scale-50 origin-center w-full">
                  <EnergyWidget config={presetConfigs.kemkens} mode="hybrid" embed />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="aspect-square">
              <CardHeader className="pb-3">
                <CardTitle className="text-pink-600 text-base">Essent</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
                  <div className="transform scale-50 origin-center w-full">
                  <EnergyWidget config={presetConfigs.essent} mode="hybrid" embed />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="aspect-square">
              <CardHeader className="pb-3">
                <CardTitle className="text-neutral-700 text-base">Apple</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
                  <div className="transform scale-50 origin-center w-full">
                  <EnergyWidget config={presetConfigs.apple} mode="hybrid" embed />
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
                  <EnergyWidget config={presetConfigs.feenstra} mode="hybrid" embed />
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
                  <EnergyWidget config={presetConfigs.warmtethuis} mode="hybrid" embed />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="aspect-square">
              <CardHeader className="pb-3">
                <CardTitle className="text-red-600 text-base">FC Twente</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
                  <div className="transform scale-50 origin-center w-full">
                  <EnergyWidget config={presetConfigs.fctwente} mode="hybrid" embed />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="aspect-square">
              <CardHeader className="pb-3">
                <CardTitle className="text-fuchsia-600 text-base">Eneco</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
                  <div className="transform scale-50 origin-center w-full">
                  <EnergyWidget config={presetConfigs.eneco} mode="hybrid" embed />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="aspect-square">
              <CardHeader className="pb-3">
                <CardTitle className="text-sky-600 text-base">HeatTransformers</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
                  <div className="transform scale-50 origin-center w-full">
                  <EnergyWidget config={presetConfigs.heattransformers} mode="hybrid" embed />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="aspect-square">
              <CardHeader className="pb-3">
                <CardTitle className="text-sky-700 text-base">Baxi</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
                  <div className="transform scale-50 origin-center w-full">
                  <EnergyWidget config={presetConfigs.baxi} mode="hybrid" embed />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="aspect-square">
              <CardHeader className="pb-3">
                <CardTitle className="text-slate-600 text-base">De Dietrich</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-full flex items-center justify-center">
                  <div className="transform scale-50 origin-center w-full">
                  <EnergyWidget config={presetConfigs.dedietrich} mode="hybrid" embed />
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
                  <EnergyWidget config={presetConfigs.warmland} mode="hybrid" embed />
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
                  <EnergyWidget config={presetConfigs.octopus} mode="hybrid" embed />
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
