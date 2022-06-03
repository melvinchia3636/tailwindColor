/* eslint-disable no-shadow */
import React from 'react';
import colors from './colors.json';

export default function Style5() {
  return (
    <div className="flex flex-col gap-8 items-center">
      {Object.entries(colors).map(([name, colorlist]) => (
        <div className="w-full">
          <div
            className="mb-3 font-semibold"
            style={{
              color: colorlist['500'],
            }}
          >
            {name[0].toUpperCase() + name.slice(1)}
          </div>
          <div className="flex justify-center gap-2">
            {Object.entries(colorlist).map(([name, hex]) => (
              <div className="bg-white p-2 drop-shadow-md rounded-sm">
                <div
                  className="w-24 h-24 rounded-sm shadow-inner flex flex-col text-sm justify-end items-center pb-2 aspect-square"
                  style={{
                    backgroundColor: hex,
                  }}
                />
                <div className="font-semibold mt-1">{name}</div>
                <div className="text-xs">{hex}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
