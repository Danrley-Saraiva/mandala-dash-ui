import { Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  onMenuToggle: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="bg-gradient-primary shadow-elegant h-16 flex items-center justify-between px-6 sticky top-0 z-50">
      {/* Left side - Menu and Logo */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuToggle}
          className="text-primary-foreground hover:bg-primary-light/20 transition-smooth"
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        <h1 className="text-primary-foreground text-2xl font-bold tracking-wide">
          MANDALA
        </h1>
      </div>

      {/* Right side - User Profile */}
      <div className="flex items-center">
        <Avatar className="h-10 w-10 ring-2 ring-primary-foreground/20 hover:ring-primary-foreground/40 transition-smooth cursor-pointer">
          <AvatarImage src="/placeholder-avatar.jpg" alt="User Avatar" />
          <AvatarFallback className="bg-primary-light text-primary-foreground">
            <User className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}