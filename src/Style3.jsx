/* eslint-disable no-shadow */
import React from 'react';
import colors from './colors.json';

export default function Style3() {
  return (
    <div className="w-3/4 drop-shadow-lg rounded-md overflow-hidden">
      {Object.entries(colors).map(([name, colorlist]) => (
        <div className="w-full">
          <div className="flex">
            <div className="w-full flex flex-col text-sm justify-center p-3 px-4 bg-white">
              <span
                className="font-semibold"
                style={{
                  color: colorlist['500'],
                }}
              >
                {name}
              </span>
            </div>
            {Object.entries(colorlist).map(([name, hex], i) => (
              <div
                className="w-full flex flex-col text-sm justify-end p-3 px-4 aspect-square"
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
