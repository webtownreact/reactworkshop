import React from 'react';
import { createHashRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import { RouterPath } from '../../SharedModule/enums/RouterPath.enum';
import { SkeletonComponent } from '../../SkeletonModule/SkeletonComponent';
import { bLoader } from '../../BModule/loaders/b.loader';
import { cLoader } from '../../CModule/loaders/c.loader';
import { AuthGuard } from '../guards/auth.guard';

export const router = createHashRouter(
  // createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <div>Hello world!</div>,
  //   },
  //   {
  //     path: '/skeleton',
  //     element: <SkeletonComponent />,
  //     children: [
  //       { path: '/skeleton/a', element: <AComponent /> },
  //       { path: '/skeleton/b', element: <BComponent /> },
  //       { path: '/skeleton/c', element: <CComponent /> },
  //     ],
  //   },
  // ]),
  createRoutesFromElements(
    <>
      <Route path={`${RouterPath.Slash}${RouterPath.Auth}`} element={<AuthGuard />}>
        <Route
          path={`${RouterPath.Slash}${RouterPath.Auth}/${RouterPath.Companies}`}
          element={<div>companies</div>}
        ></Route>
      </Route>

      <Route path={`${RouterPath.Slash}${RouterPath.Skeleton}`} element={<SkeletonComponent />}>
        <Route
          path={`${RouterPath.Slash}${RouterPath.Skeleton}`}
          element={<Navigate to={`${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.A}`}></Navigate>}
        ></Route>
        <Route
          path={`${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.A}`}
          lazy={() => import('../../AModule/components/AComponent')}
        ></Route>
        <Route
          path={`${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.B}`}
          lazy={() => import('../../BModule/components/BComponent')}
          loader={bLoader}
        ></Route>
        <Route
          path={`${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.B}/${RouterPath.Id}`}
          lazy={() => import('../../BModule/components/BComponent')}
          loader={bLoader}
        ></Route>
        <Route
          path={`${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.C}`}
          lazy={() => import('../../CModule/components/CComponent')}
          loader={cLoader}
        ></Route>
        <Route
          path={`${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.D}`}
          lazy={() => import('../../DModule/components/DComponent')}
        ></Route>
        <Route
          path={`${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.E}`}
          lazy={() => import('../../EModule/components/EComponent')}
        ></Route>
        <Route
          path={`${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.F}`}
          lazy={() => import('../../FModule/components/FComponent')}
        ></Route>
        <Route
          path={`${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.G}`}
          lazy={() => import('../../GModule/components/GComponent')}
        ></Route>
        <Route
          path={`${RouterPath.Slash}${RouterPath.Skeleton}/${RouterPath.H}`}
          lazy={() => import('../../HModule/components/HComponent')}
        ></Route>
      </Route>
      <Route path={`${RouterPath.Slash}${RouterPath.NotFound}`} element={<div>not found</div>}></Route>
    </>,
  ),
);
