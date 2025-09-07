import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type HslColorInputProps = {
  id: string;
  label: string;
  value: string; // e.g. "347 77% 60%"
  placeholder?: string;
  onChange: (value: string) => void;
};

// Parse strings like "347 77% 60%" into H, S, L numbers
function parseHsl(value: string): { h: number; s: number; l: number } | null {
  if (!value) return null;
  // Accept formats: "h s% l%" or "h, s%, l%" or with extra spaces
  const cleaned = value.trim().replace(/,/g, ' ').replace(/\s+/g, ' ');
  const parts = cleaned.split(' ');
  if (parts.length < 3) return null;
  const h = Number(parts[0]);
  const s = Number(String(parts[1]).replace('%', ''));
  const l = Number(String(parts[2]).replace('%', ''));
  if ([h, s, l].some((n) => Number.isNaN(n))) return null;
  return {
    h: Math.max(0, Math.min(360, h)),
    s: Math.max(0, Math.min(100, s)),
    l: Math.max(0, Math.min(100, l)),
  };
}

function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  const S = s / 100;
  const L = l / 100;
  const C = (1 - Math.abs(2 * L - 1)) * S;
  const Hp = (h % 360) / 60;
  const X = C * (1 - Math.abs((Hp % 2) - 1));
  let r1 = 0, g1 = 0, b1 = 0;
  if (0 <= Hp && Hp < 1) {
    r1 = C; g1 = X; b1 = 0;
  } else if (1 <= Hp && Hp < 2) {
    r1 = X; g1 = C; b1 = 0;
  } else if (2 <= Hp && Hp < 3) {
    r1 = 0; g1 = C; b1 = X;
  } else if (3 <= Hp && Hp < 4) {
    r1 = 0; g1 = X; b1 = C;
  } else if (4 <= Hp && Hp < 5) {
    r1 = X; g1 = 0; b1 = C;
  } else if (5 <= Hp && Hp < 6) {
    r1 = C; g1 = 0; b1 = X;
  }
  const m = L - C / 2;
  return {
    r: Math.round((r1 + m) * 255),
    g: Math.round((g1 + m) * 255),
    b: Math.round((b1 + m) * 255),
  };
}

function componentToHex(c: number): string {
  const hex = Math.max(0, Math.min(255, c)).toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function hslToHex(h: number, s: number, l: number): string {
  const { r, g, b } = hslToRgb(h, s, l);
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return null;
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  const R = r / 255, G = g / 255, B = b / 255;
  const max = Math.max(R, G, B), min = Math.min(R, G, B);
  const d = max - min;
  let h = 0;
  if (d === 0) h = 0;
  else if (max === R) h = ((G - B) / d) % 6;
  else if (max === G) h = (B - R) / d + 2;
  else h = (R - G) / d + 4;
  h = Math.round((h * 60 + 360) % 360);

  const l = (max + min) / 2;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  return { h, s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hexToHslString(hex: string): string | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const { h, s, l } = rgbToHsl(rgb.r, rgb.g, rgb.b);
  return `${h} ${s}% ${l}%`;
}

export const HslColorInput: React.FC<HslColorInputProps> = ({ id, label, value, placeholder, onChange }) => {
  const parsed = parseHsl(value);
  const hex = parsed ? hslToHex(parsed.h, parsed.s, parsed.l) : '#ffffff';

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="flex items-center gap-2">
        <Input
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1"
        />
        <input
          type="color"
          aria-label={`${label} color picker`}
          value={hex}
          onChange={(e) => {
            const hsl = hexToHslString(e.target.value);
            if (hsl) onChange(hsl);
          }}
          className="h-10 w-10 rounded-md border border-input bg-background p-0"
        />
      </div>
    </div>
  );
};

export default HslColorInput;

