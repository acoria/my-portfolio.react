import { error } from "./core/utils/error";

export const AppConfig = {
  HOST:
    process.env.REACT_APP_BACKEND_HOST ??
    error(`Error while getting host information from environment variables`),
  MY_EMAIL:
    process.env.REACT_APP_MY_EMAIL ??
    error("Error while getting e-mail from environment variables"),
  PROFILE_LINK_XING:
    process.env.REACT_APP_PROFILE_LINK_XING ??
    error("Error while getting Xing profile link from environment variables"),
  PROFILE_LINK_LINKEDIN:
    process.env.REACT_APP_PROFILE_LINK_LINKEDIN ??
    error(
      "Error while getting LinkedIn profile link from environment variables"
    ),
};
