import {
  Home,
  School,
  Users,
  Box,
  KeySquare,
  Settings,
  AudioWaveformIcon,
  Book,
} from "lucide-react";
import { MenuItem } from "../interface/MenuItem";

export const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    icon: <Home className="h-4 w-4" />,
    href: "/",
  },
  {
    label: "Keys",
    icon: <KeySquare className="h-4 w-4" />,
    href: "/keys",
  },
  {
    label: "Students",
    icon: <Users className="h-4 w-4" />,
    href: "/students",
  },
  {
    label: "Instructors",
    icon: <School className="h-4 w-4" />,
    href: "/instructors",
  },
  {
    label: "Courses",
    icon: <Book className="h-4 w-4" />,
    href: "/courses",
  },
  {
    label: "Packs",
    icon: <Box className="h-4 w-4" />,
    href: "/packs",
  },
  {
    label: "Remote",
    icon: <AudioWaveformIcon className="h-4 w-4" />,
    href: "/remote",
  },
  {
    label: "Settings",
    icon: <Settings className="h-4 w-4" />,
    href: "/settings",
  },
];
