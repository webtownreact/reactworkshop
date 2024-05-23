import './style.pcss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { TodoComponent } from './src/modules/core/components/todo.component';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<TodoComponent />);
