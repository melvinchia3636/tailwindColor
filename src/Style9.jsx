/* eslint-disable no-nested-ternary */
import React from 'react';
import colors from './colors.json';

const hexToRGB = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `RGB(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
      result[3],
      16,
    )})`
    : null;
};

const hexToHSV = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const h = max === min
    ? 0
    : max === r
      ? (g - b) / (max - min)
      : max === g
        ? 2 + (b - r) / (max - min)
        : 4 + (r - g) / (max - min);
  const s = max === 0 ? 0 : 1 - min / max;
  const v = max / 255;
  return `HSV(${Math.round(h * 60)}, ${Math.round(s * 100)}%, ${Math.round(
    v * 100,
  )}%)`;
};

export default function Style9() {
  return (
    <div className="grid grid-cols-5 gap-4 w-3/4">
      {Object.entries(colors).map(([name, colorlist]) => (
        <div className="w-full drop-shadow-lg overflow-hidden p-2 bg-white flex flex-col gap-4">
          <div
            className="h-[30rem]"
            style={{
              backgroundColor: colorlist['500'],
            }}
          >
            <div className="w-full bg-white p-2 mt-8">
              <p
                className="uppercase font-medium text-base tracking-wider"
                style={{
                  color: colorlist['500'],
                }}
              >
                {name}
              </p>
              <p className="text-slate-900 opacity-50 font-medium text-xs tracking-wider mt-1 uppercase">
                {colorlist['500']}
              </p>
              <p className="text-slate-900 opacity-50 font-medium text-xs tracking-wider mt-0.5 uppercase">
                {hexToRGB(colorlist['500'])}
              </p>
              <p className="text-slate-900 opacity-50 font-medium text-xs tracking-wider mt-0.5 uppercase">
                {hexToHSV(colorlist['500'])}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
