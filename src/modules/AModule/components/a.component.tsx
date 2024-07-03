import React from 'react';
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import { RouterPath } from '../../core/enums/router-path.enum';
import { ISdf } from '../interfaces/sdf.interface';
import plan_logo from './plan_logo.png';
import hyperplane from './hyperplane.svg';

export const Component = () => {
  const navigate = useNavigate();
  // const params = useParams();
  // console.log(params.id);

  const sdf: ISdf = useLoaderData() as ISdf;

  const navigateToB: () => void = () => {
    navigate(`/${RouterPath.skeleton}/${RouterPath.b}`);
  };

  return (
    <div>
      <img className="w-10 h-10" src={hyperplane}></img>
      <img className="w-10 h-10" src={plan_logo}></img>
      <div>{sdf.sdf}</div>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
        onClick={() => navigateToB()}
      >
        Navigate to b
      </button>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
      >
        <NavLink to={`/${RouterPath.b}`}>Navigate to b</NavLink>
      </button>
    </div>
  );
};
