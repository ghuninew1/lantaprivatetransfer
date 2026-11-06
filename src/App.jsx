import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error, Root, Loading } from "./components";
import { navLinks } from "./data/navLinks";

export default function App() {
    const mainRoutes = navLinks.map((link) => ({
        path: link.to,
        index: link.to === "/",
        element: <>{link.element}</>,
    }));

    const rootRoute = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <Error />,
            children: [...mainRoutes],
        },
    ]);

    return <RouterProvider router={rootRoute} fallbackElement={<Loading />} />;
}
