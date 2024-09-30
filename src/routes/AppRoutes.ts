import { configureRoutes } from "./core/configureRoutes";
import { route } from "./core/route";

export const AppRoutes = configureRoutes({
  home: route("/"),
  imprint: route("/impressum"),
  privacyPolicy: route("/datenschutzerklaerung"),
  products: route("/products"),
});
