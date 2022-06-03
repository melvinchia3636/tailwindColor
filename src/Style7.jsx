/* eslint-disable no-shadow */
import React from 'react';
import colors from './colors.json';

export default function Style7() {
  return (
    <div className="px-8 w-full flex flex-col gap-12 items-center">
      {Object.entries(colors).map(([name, colorlist]) => (
        <div className="w-full">
          <div
            className="mb-4 font-semibold text-center text-2xl uppercase tracking-widest"
            style={{
              color: colorlist['500'],
            }}
          >
            {name[0].toUpperCase() + name.slice(1)}
          </div>
          <div className="flex">
            {Object.entries(colorlist).map(([name, hex], i) => (
              <div
                className="w-full h-96 flex flex-col text-sm justify-between p-6"
                style={{
                  backgroundColor: hex,
                  color: i < 5 ? 'black' : 'white',
                }}
              >
                <div className="w-min">
                  <div className="font-semibold text-3xl">{name}</div>
                  <div
                    className="w-full mt-1.5 border-b-[3.6px]"
                    style={{
                      borderColor: i < 5 ? 'black' : 'white',
                    }}
                  />
                </div>
                <div>
                  <div
                    className="w-full mb-2 border-b-[1.6px]"
                    style={{
                      borderColor: i < 5 ? 'black' : 'white',
                    }}
                  />
                  <div className="text-xs">{hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
