import { Home, School, Users, Box, KeySquare, Settings } from "lucide-react";
import { IMenuCategory } from "../interface/MenuItem";

const props = { className: "h-4 w-4 mr-2" };

export const menuItems: IMenuCategory[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: <Home {...props} />,
    items: [
      { id: 1, label: "Overview", icon: <Home {...props} />, href: "/dashboard/overview" },
      { id: 2, label: "Reports", icon: <Home {...props} />, href: "/dashboard/reports" }
    ],
  },
  {
    id: 2,
    title: "Keys",
    icon: <KeySquare {...props} />,
    items: [
      { id: 3, label: "Manage Keys", icon: <KeySquare {...props} />, href: "/keys/manage" },
      { id: 4, label: "Key Settings", icon: <KeySquare {...props} />, href: "/keys/settings" }
    ],
  },
  {
    id: 3,
    title: "Students",
    icon: <Users {...props} />,
    items: [
      { id: 5, label: "Student List", icon: <Users {...props} />, href: "/students/list" },
      { id: 6, label: "Student Reports", icon: <Users {...props} />, href: "/students/reports" }
    ],
  },
  {
    id: 4,
    title: "Courses",
    icon: <School {...props} />,
    items: [
      { id: 7, label: "Course List", icon: <School {...props} />, href: "/courses/list" },
      { id: 8, label: "Course Settings", icon: <School {...props} />, href: "/courses/settings" }
    ],
  },
  {
    id: 5,
    title: "Packs",
    icon: <Box {...props} />,
    items: [
      { id: 9, label: "Pack List", icon: <Box {...props} />, href: "/packs/list" },
      { id: 10, label: "Pack Settings", icon: <Box {...props} />, href: "/packs/settings" }
    ],
  },
  {
    id: 6,
    title: "Settings",
    icon: <Settings {...props} />,
    items: [
      { id: 11, label: "General Settings", icon: <Settings {...props} />, href: "/settings/general" },
      { id: 12, label: "Profile Settings", icon: <Settings {...props} />, href: "/settings/profile" }
    ],
  },
];
