import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AppLayout from "./layout/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import PageAnimation from "./Animations/PageAnimation.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/My-Website-Portfolio",
          element: (
            <PageAnimation>
              <Home />
            </PageAnimation>
          ),
        },
        {
          path: "/My-Website-Portfolio/Project/:projectName",
          element: (
            <PageAnimation>
              <ProjectPage />
            </PageAnimation>
          ),
        },
        {
          path: "*",
          element: (
            <PageAnimation>
              <NotFound />
            </PageAnimation>
          ),
        },
      ],
    },
  ]);

  return (
    <AnimatePresence mode={"wait"}>
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
