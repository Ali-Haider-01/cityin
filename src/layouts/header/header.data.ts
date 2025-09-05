import { APP_ROUTES } from "@/constants/routes";

export interface NavLinkItem {
  title: string;
  path: string;
}

export const navLinksData: NavLinkItem[] = [
  {
    title: "Home",
    path: APP_ROUTES.HOME,
  },
  {
    title: "Search",
    path: APP_ROUTES.SEARCH,
  },
  {
    title: "About us",
    path: APP_ROUTES.ABOUT_US,
  },
  {
    title: "Contact us",
    path: APP_ROUTES.CONTACT_US,
  },
];
