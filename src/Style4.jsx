/* eslint-disable no-shadow */
import React from 'react';
import colors from './colors.json';

export default function Style4() {
  return (
    <div className="flex flex-col gap-8 items-center">
      {Object.entries(colors).map(([name, colorlist]) => (
        <div className="w-full drop-shadow-lg rounded-md overflow-hidden">
          <div
            className="p-5 px-4 font-semibold"
            style={{
              backgroundColor: colorlist['500'],
              color: colorlist['100'],
            }}
          >
            {name[0].toUpperCase() + name.slice(1)}
          </div>
          <div className="flex justify-center">
            {Object.entries(colorlist).map(([name, hex], i) => (
              <div
                className="w-24 h-44 flex flex-col text-sm justify-end items-center pb-2 aspect-square"
                style={{
                  backgroundColor: hex,
                  color: i < 5 ? 'black' : 'white',
                }}
              >
                <span className="font-semibold">{name}</span>
                <span className="text-xs">{hex}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
