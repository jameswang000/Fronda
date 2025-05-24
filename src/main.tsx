import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./components/Homepage.tsx";
import ShoppingPage from "./components/ShoppingPage.tsx";
import Layout from "./components/Layout.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import { ShoppingCartProvider } from "./components/ShoppingCartContext.tsx";
import ShoppingCartPage from "./components/ShoppingCartPage.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "/shopping", element: <ShoppingPage /> },
        { path: "/shopping/:itemId", element: <ShoppingPage /> },
        { path: "/cart", element: <ShoppingCartPage /> },
      ],
      errorElement: <ErrorPage />,
    },
  ],
  { basename: "/Fronda/" }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  </StrictMode>
);
