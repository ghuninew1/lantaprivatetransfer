import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error, Root, Loading } from "./components";
import { navLinks } from "./assets/navLinks";

export default function App() {
    const mainRoutes = navLinks.map((link) => ({
        path: link.to,
        index: link.to === "/",
        element: <>{link.element}</>,
    }));

    //     path: link.to,
    //     element: <AuthRoute>{link.element}</AuthRoute>,
    // }));

    // const singing = login.map((link) => ({
    //     path: link.to,
    //     element: <AuthUser>{link.element}</AuthUser>,
    // }));

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
