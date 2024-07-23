import './style.pcss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './src/modules/CoreModule/routers/router';
// import { router } from './src/modules/core/routers/router';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<RouterProvider router={router} />);
