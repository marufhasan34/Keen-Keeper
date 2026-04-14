import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout';
import TimeLine from './pages/timeLine/TimeLine';
import Friends from './pages/friends/Friends';
import NotFound from './pages/notFound/NotFound';
import Stats from './pages/Stats/Stats';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: '/',
        element: <h2>Home Page</h2>
      },
      {
        path: '/friends',
        element: <Friends/>
      },
      {
        path: '/timeLine',
        element: <TimeLine/>
      },
      {
        path: '/stats',
        element: <Stats/>
      }

    ],
    errorElement : <NotFound/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
