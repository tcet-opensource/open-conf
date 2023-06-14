import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "About",              // Need of making the About page
    path: "#about",
    // element: <Profile />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Agenda",            // Need of making the Agenda page
    path: "#agenda",
    // element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "Organizers",        // Need of making the Organizers page
    path: "#organizers",
    // element: <SignUp />,
  },
  {
    icon: DocumentTextIcon,
    name: "FAQs",              // Need of making the FAQs page
    href: "#faqs",
    element: "",
  },
];

export default routes;
