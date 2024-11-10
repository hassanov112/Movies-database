import 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import Layout from '@/Layout';
import ErrorPage from '#routes/error-page';
import Movies from '#routes/Movies';
import MoviesDetails from '#routes/Movies/Details';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Movies /> },
      {
        path: '/:id',
        element: <MoviesDetails />,
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    </QueryClientProvider>
  );
}
