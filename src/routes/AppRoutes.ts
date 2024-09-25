import { configureRoutes } from "./core/configureRoutes";
import { route } from "./core/route";

export const AppRoutes = configureRoutes({
  home: route("/"),
  imprint: route("/imprint"),
  privacyPolicy: route("/privacyPolicy"),
});
