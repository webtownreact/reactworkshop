import './style.pcss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { SkeletonComponent } from './src/modules/core/components/skeleton.component';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<SkeletonComponent />);
