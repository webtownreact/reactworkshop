import React from 'react';
import { Navigate, Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import { RouterPath } from '../enums/router-path.enum';
import { TodoComponent } from '../components/todo.component';
import { aLoader } from '../../AModule/loaders/a.loader';
import { bLoader } from '../../BModule/loaders/b.loader';
import { AuthGuard } from '../components/auth-guard';

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path={`${RouterPath.slash}`} element={<Navigate replace to={`${RouterPath.skeleton}`} />}></Route>

      <Route
        path={`${RouterPath.slash}${RouterPath.skeleton}`}
        lazy={() => import('../../SkeletonModule/components/skeleton.component')}
      >
        <Route
          path={`${RouterPath.slash}${RouterPath.skeleton}`}
          element={<Navigate replace to={`${RouterPath.a}`} />}
        ></Route>
        <Route
          path={`${RouterPath.slash}${RouterPath.skeleton}/${RouterPath.a}`}
          lazy={() => import('../../AModule/components/a.component')}
          loader={aLoader}
        ></Route>
        <Route
          path={`${RouterPath.slash}${RouterPath.skeleton}/${RouterPath.a}/${RouterPath.id}`}
          lazy={() => import('../../AModule/components/a.component')}
          loader={aLoader}
        ></Route>
        <Route
          path={`${RouterPath.slash}${RouterPath.skeleton}/${RouterPath.b}`}
          lazy={() => import('../../BModule/components/b.component')}
          loader={bLoader}
        ></Route>
        <Route
          path={`${RouterPath.slash}${RouterPath.skeleton}/${RouterPath.c}`}
          lazy={() => import('../../CModule/components/c.component')}
        ></Route>
        <Route
          path={`${RouterPath.slash}${RouterPath.skeleton}/${RouterPath.e}`}
          lazy={() => import('../../Emodule/e.component')}
        ></Route>
        <Route
          path={`${RouterPath.slash}${RouterPath.skeleton}/${RouterPath.f}`}
          lazy={() => import('../../FModule/components/f.component')}
        ></Route>
        <Route
          path={`${RouterPath.slash}${RouterPath.skeleton}/${RouterPath.g}`}
          lazy={() => import('../../GModule/components/g.component')}
        ></Route>
        <Route
          path={`${RouterPath.slash}${RouterPath.skeleton}/${RouterPath.h}`}
          lazy={() => import('../../HModule/components/h.component')}
        ></Route>
        <Route
          path={`${RouterPath.slash}${RouterPath.skeleton}/${RouterPath.i}`}
          lazy={() => import('../../IModule/components/i.component')}
        ></Route>
      </Route>

      <Route path={`${RouterPath.slash}${RouterPath.admin}`} element={<AuthGuard />}>
        <Route
          path={`${RouterPath.slash}${RouterPath.admin}/${RouterPath.todo}`}
          element={<TodoComponent></TodoComponent>}
        ></Route>
      </Route>
      <Route path={`${RouterPath.notFound}`} element={<div>this not found</div>}></Route>
    </>,
  ),
);
