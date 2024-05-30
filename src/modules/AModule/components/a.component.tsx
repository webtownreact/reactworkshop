import React from 'react';
import { NavLink, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { RouterPath } from '../../core/enums/router-path.enum';

export const Component = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.id);

  const [searchParams] = useSearchParams();

  console.log(searchParams);

  const navigateToB: () => void = () => {
    navigate(`/${RouterPath.b}`);
  };

  return (
    <div>
      <div>AComponent</div>
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
