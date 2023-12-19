import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import About from "../pages/about";

// Good video on React routing: https://www.youtube.com/watch?v=G7UzhrNX60o
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "", element: <Home></Home> },
      { path: "about", element: <About></About> },
    ],
  },
]);
