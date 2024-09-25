import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { Page } from "../pages/Page";
import { Imprint } from "../features/imprint/Imprint";
import { PrivacyPolicy } from "../features/privacyPolicy/PrivacyPolicy";

export const AppRouter = createBrowserRouter([
  { path: AppRoutes.home.origin, element: <Page /> },
  { path: AppRoutes.imprint.origin, element: <Imprint /> },
  { path: AppRoutes.privacyPolicy.origin, element: <PrivacyPolicy /> },
]);
