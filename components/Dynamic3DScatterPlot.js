'use client'

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the ScatterPlot component
const DynamicScatterPlot = dynamic(() => import('./ScatterPlot'), {
  ssr: false,  // Disable server-side rendering if needed
  loading: () => <p>Loading...</p> // Optional loading component
});

export default function Dynamic3DScatterPlot() {
  return (
    <div className='scatter-plot-container'><DynamicScatterPlot /></div>
  );
};