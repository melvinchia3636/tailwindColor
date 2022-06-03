/* eslint-disable no-shadow */
import React from 'react';
import colors from './colors.json';

export default function Style2() {
  return (
    <div className="flex flex-col gap-8 w-3/4">
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
          <div className="flex">
            {Object.entries(colorlist).map(([name, hex], i) => (
              <div
                className="w-full flex flex-col text-sm justify-center p-3 px-4"
                style={{
                  backgroundColor: hex,
                  color: i < 5 ? 'black' : 'white',
                }}
              >
                <span className="font-semibold">{name}</span>
                <span>{hex}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
