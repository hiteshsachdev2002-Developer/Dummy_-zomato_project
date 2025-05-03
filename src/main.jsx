import { createRoot } from 'react-dom/client'
import AppRouter from './Router/AppRouter'
import React from 'react';
import {RouterProvider } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <RouterProvider router={AppRouter} />
)
