import { navigate } from "astro:transitions/client";

/** use only on client-side! */
export const refresh = () => {
  navigate(window.location.href);
};
