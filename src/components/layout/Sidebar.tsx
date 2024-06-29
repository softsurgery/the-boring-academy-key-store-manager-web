import { cn } from "@/utils/tailwind";
import { menuItems } from "./constants/MenuItems";
import { Link, useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

  // Find the active item based on the current pathname
  const activeItem = menuItems.find(({ items }) =>
    items.some(({ href }) => location.pathname.startsWith(href))
  );

  return (
    <nav
      className={cn(
        className,
        "grid items-start px-2 text-sm font-medium lg:px-4"
      )}
    >
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue={activeItem?.id.toString()}
      >
        {menuItems.map(({ id, title, icon, items }) => (
          <AccordionItem
            key={id}
            value={id.toString()}
            className="w-full items-center border-0"
          >
            <AccordionTrigger className={cn("rounded-lg px-3 py-2 border-0")}>
              <span className="flex items-center">
                {icon} {title}
              </span>
            </AccordionTrigger>
            <AccordionContent className="-mb-2">
              {items.map(({ id: subId, label, href }) => (
                <Link
                  key={subId}
                  to={href}
                  className={cn(
                    "block px-3 py-2",
                    location.pathname === href
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {label}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </nav>
  );
}
