import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { INavigation } from '../interface/navigation.interface';
import { defaultNavigation } from '../consts/default-navigation.const';

export const Component = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[60px_1fr]">
      <div className="bg-slate-600 flex">
        {defaultNavigation.map((iNavigation: INavigation) => (
          <NavLink
            key={iNavigation.id}
            className={({ isActive }) =>
              isActive
                ? 'flex text-white w-full h-full items-center justify-center bg-green-400'
                : 'flex text-white w-full h-full items-center justify-center'
            }
            to={iNavigation.path}
          >
            <div className="">{iNavigation.displayName}</div>
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
