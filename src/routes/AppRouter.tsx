import { createBrowserRouter } from "react-router-dom";
import { ImprintPage } from "../pages/ImprintPage";
import { Page } from "../pages/Page";
import { PrivacyPolicyPage } from "../pages/PrivacyPolicyPage";
import { AppRoutes } from "./AppRoutes";
import { ProductsPage } from "../products/ProductsPage";
import { ErrorPage } from "../pages/ErrorPage";

export const AppRouter = createBrowserRouter([
  { path: AppRoutes.home.origin, element: <Page /> },
  {path: "*", element: <ErrorPage />}
  // { path: AppRoutes.imprint.origin, element: <ImprintPage /> },
  // { path: AppRoutes.privacyPolicy.origin, element: <PrivacyPolicyPage /> },
  // { path: "/products/*", element: <ProductsPage /> },
]);
