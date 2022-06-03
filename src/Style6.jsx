/* eslint-disable no-shadow */
import React from 'react';
import colors from './colors.json';

export default function Style6() {
  return (
    <div className="flex flex-col gap-12 items-center">
      {Object.entries(colors).map(([name, colorlist]) => (
        <div className="w-full">
          <div
            className="mb-4 font-semibold text-center"
            style={{
              color: colorlist['500'],
            }}
          >
            {name[0].toUpperCase() + name.slice(1)}
          </div>
          <div className="flex justify-center gap-3">
            {Object.entries(colorlist).map(([name, hex], i) => (
              <div className="flex flex-col items-center gap-2">
                <div
                  className="w-24 h-24 rounded-full flex text-sm justify-center items-center aspect-square"
                  style={{
                    backgroundColor: hex,
                    color: i < 5 ? 'black' : 'white',
                  }}
                >
                  <span className="font-semibold">{name}</span>
                </div>
                <div className="text-xs font-semibold">{hex}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
