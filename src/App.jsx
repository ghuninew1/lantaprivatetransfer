import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error, Root, Loading } from "./components";
import { navLinks } from "./data/navLinks";
import { TourDetail } from "./pages";
import NotFound from "./pages/NotFound";

const mainRoutes = navLinks.flatMap(({ to, sourcePath, element }) => [
    to === "/" ? { index: true, element } : { path: to, element },
    { path: sourcePath, element },
]);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        hydrateFallbackElement: <Loading />,
        children: [
            ...mainRoutes,
            { path: "tour-packages/:articleId", element: <TourDetail /> },
            { path: "blog_details.php", element: <TourDetail /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
