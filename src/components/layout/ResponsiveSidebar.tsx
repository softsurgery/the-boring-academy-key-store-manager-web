import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./constants/MenuItems";
import { cn } from "@/lib/cn";

export const ResponsiveSidebar = () => {
    const location = useLocation();
  
    return (
      <nav className="grid gap-2 text-lg font-medium my-5">
        {menuItems.map(({ label, icon, href }) => (
          <Link
            key={label}
            to={href}
            className={cn(
              "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2",
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
  };