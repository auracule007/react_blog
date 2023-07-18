// import { Children } from "react";
import { BlogComment } from "./components/BlogComment";
import RouterLayout from "./components/layouts/RouterLayout";
import { BlogDetails } from "./pages/BlogDetails";
import { BlogPost } from "./pages/BlogPost";

const routes = [
    {
        path: "/",
        element: <RouterLayout />,
        children: [
            {
                path: "/",
                element: <BlogPost />
            },
            {
                path: "/details/:postId/",
                element: <BlogDetails />
            },
        ]

    }

]

export default routes;