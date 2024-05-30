import React from 'react';
import { Navigate, Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';

import { RouterPath } from '../enums/router-path.enum';

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route
        path={`${RouterPath.slash}${RouterPath.skeleton}`}
        lazy={() => import('../../SkeletonModule/components/skeleton.component')}
      >
        <Route
          path={`${RouterPath.slash}${RouterPath.skeleton}`}
          element={<Navigate replace to={`${RouterPath.a}`} />}
        ></Route>
        <Route path={`${RouterPath.a}`} lazy={() => import('../../AModule/components/a.component')}></Route>
        <Route
          path={`${RouterPath.a}/${RouterPath.id}`}
          lazy={() => import('../../AModule/components/a.component')}
        ></Route>
        <Route path={`${RouterPath.b}`} lazy={() => import('../../BModule/components/b.component')}></Route>
        <Route path={`${RouterPath.c}`} lazy={() => import('../../CModule/components/c.component')}></Route>
      </Route>

      {/* <Route path={`${RouterPath.todo}`} lazy={() => import('../../core/components/todo.component.tsx)}>
        <Route
          path={`${RouterPath.id}`}
          lazy={() => import('../../SkeletonModule/components/skeleton.component')}
        ></Route>
      </Route> */}
      <Route path={`${RouterPath.notFound}`} element={<div>this not found</div>}></Route>
    </>,
  ),
);
