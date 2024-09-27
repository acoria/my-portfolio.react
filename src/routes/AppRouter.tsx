import { createBrowserRouter } from "react-router-dom";
import { ImprintPage } from "../pages/ImprintPage";
import { Page } from "../pages/Page";
import { PrivacyPolicyPage } from "../pages/PrivacyPolicyPage";
import { AppRoutes } from "./AppRoutes";
import { ProductsPage } from "../products/ProductsPage";

export const AppRouter = createBrowserRouter([
  { path: AppRoutes.home.origin, element: <Page /> },
  { path: AppRoutes.imprint.origin, element: <ImprintPage /> },
  { path: AppRoutes.privacyPolicy.origin, element: <PrivacyPolicyPage /> },
  { path: "/products", element: <ProductsPage /> },
]);
