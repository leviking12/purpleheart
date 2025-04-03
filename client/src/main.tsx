// main.tsx (or main.ts)
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';          // Omit .tsx
import Home from './pages/home';  // Omit .tsx
import Music from './pages/music';
import Merch from './pages/merch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'music', element: <Music /> },
      { path: 'matchup/:id', element: <Merch /> },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
