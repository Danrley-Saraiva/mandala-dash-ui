import { Home, Clock, BarChart3, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Clock, label: "Hora Task x Ponto", href: "/task-time" },
  { icon: BarChart3, label: "Pesquisa de Satisfação", href: "/satisfaction-survey" },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-80 bg-background shadow-elegant transform transition-slide z-50",
          "lg:translate-x-0 lg:static lg:z-auto",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="lg:hidden hover:bg-muted transition-smooth"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start gap-3 h-12 text-left hover:bg-accent hover:text-accent-foreground transition-smooth"
              onClick={() => {
                // Handle navigation here
                onClose();
              }}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-base">{item.label}</span>
            </Button>
          ))}
        </nav>
      </aside>
    </>
  );
}