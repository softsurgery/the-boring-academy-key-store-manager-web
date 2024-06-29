import { menuItems } from "./constants/MenuItems";
import { cn } from "@/lib/cn";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

  return (
    <nav
      className={cn(
        className,
        "grid items-start px-2 text-sm font-medium lg:px-4"
      )}
    >
      {menuItems.map(({ label, icon, href }) => (
        <Link
          key={label}
          to={href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
            location.pathname === href
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {icon}
          {label}
        </Link>
      ))}
    </nav>
  );
}
