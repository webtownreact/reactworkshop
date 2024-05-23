import React from 'react';
import { Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import { AComponent } from '../../AModule/components/a.component';
import { BComponent } from '../../BModule/components/b.component';
import { CComponent } from '../../CModule/components/c.component';
import { TodoComponent } from '../components/todo.component';
import { RouterPath } from '../enums/router-path.enum';

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path={`${RouterPath.a}`} element={<AComponent />}></Route>
      <Route path={`${RouterPath.b}`} element={<BComponent />}></Route>
      <Route path={`${RouterPath.c}`} element={<CComponent />}></Route>
      <Route path={`${RouterPath.todo}`} element={<TodoComponent />}>
        <Route path={`${RouterPath.id}`} element={<TodoComponent />}></Route>
      </Route>
      <Route path={`${RouterPath.notFound}`} element={<div>this not found</div>}></Route>
    </>,
  ),
);
