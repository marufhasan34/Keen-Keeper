import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout";
import TimeLine from "./pages/timeLine/TimeLine";
import NotFound from "./pages/notFound/NotFound";
import Stats from "./pages/Stats/Stats";
import HomePage from "./components/homePage/HomePage";
import FriendDetails from "./pages/friendDetails/FriendDetails";
import TimelineFriendProvider from "./context/TimelineFriendProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <FriendDetails />,
      },
      {
        path: "/timeLine",
        element: <TimeLine />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineFriendProvider>
      <RouterProvider router={router} />
    </TimelineFriendProvider>
  </StrictMode>,
);
