/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
import { Icon } from '@iconify/react';
import React from 'react';

import Style1 from './Style1';
import Style2 from './Style2';
import Style3 from './Style3';
import Style4 from './Style4';
import Style5 from './Style5';
import Style6 from './Style6';
import Style7 from './Style7';
import Style8 from './Style8';
import Style9 from './Style9';

function App() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-slate-100">
          <div className="flex-none">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 font-semibold">Tailwind Colors</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal font-semibold text-sm">
              <li>
                <a className="rounded-md hover:bg-slate-200 active:text-slate-100 active:bg-slate-600">
                  <Icon icon="iconoir:view-grid" className="w-5 h-5 stroke-2" />
                  Components
                </a>
              </li>
              <li>
                <a className="rounded-md hover:bg-slate-200 active:text-slate-100 active:bg-slate-600">
                  <Icon icon="iconoir:color-picker" className="w-5 h-5 stroke-2" />
                  Theme
                </a>
              </li>
              <li>
                <a className="rounded-md hover:bg-slate-200 active:text-slate-100 active:bg-slate-600">
                  <Icon icon="uil:github" className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col gap-24 items-center p-12 bg-slate-100">
          <Style1 />
          <Style2 />
          <Style3 />
          <Style4 />
          <Style5 />
          <Style6 />
          <Style7 />
          <Style8 />
          <Style9 />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay" />
        <ul className="menu p-4 overflow-y-auto w-80 bg-slate-200">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
