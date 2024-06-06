import React from 'react';
import { NavLink, Outlet, ScrollRestoration } from 'react-router-dom';
import { INavigation } from '../interface/navigation.interface';
import { defaultNavigation } from '../consts/default-navigation.const';

export const Component = () => {
  const getClass: (isActive: boolean) => string = (isActive: boolean) => {
    const klasses = 'flex text-white w-full h-full items-center justify-center';
    return isActive ? `${klasses} bg-green-400` : klasses;
  };

  return (
    <div className="grid grid-cols-1 grid-rows-[60px_1fr]">
      <ScrollRestoration />
      <div className="bg-slate-600 flex">
        {defaultNavigation.map((iNavigation: INavigation) => (
          <NavLink key={iNavigation.id} className={({ isActive }) => getClass(isActive)} to={iNavigation.path}>
            <div className="">{iNavigation.displayName}</div>
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
