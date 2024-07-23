import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigationConfig } from '../../CoreModule/consts/navigation.const';
import { INavigationConfig } from '../../CoreModule/interfaces/navigation-config.interface';

export const HeaderComponent = () => {
  return (
    <header className="flex items-center justify-between bg-slate-400">
      {navigationConfig.map((navigationConfig: INavigationConfig) => (
        <NavLink
          key={navigationConfig.to}
          to={navigationConfig.to}
          className={({ isActive }) => [isActive ? 'bg-blue-300' : ''].join(' ')}
        >
          <div>
            <span>{navigationConfig.text}</span>
          </div>
        </NavLink>
      ))}
    </header>
  );
};
