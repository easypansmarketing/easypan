import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChefHat } from "lucide-react";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl">
            <ChefHat className="h-7 w-7 md:h-8 md:w-8 text-primary" />
            <span className="text-primary">EASYPANS</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/recipes"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/recipes") ? "text-primary" : "text-foreground"
              }`}
            >
              Recipe
            </Link>
            <Link
              to="/#products"
              className="text-sm font-medium transition-colors hover:text-primary text-foreground"
            >
              Product
            </Link>
            <Link
              to="/#about"
              className="text-sm font-medium transition-colors hover:text-primary text-foreground"
            >
              About Us
            </Link>
          </nav>

          <Button size="sm" className="font-medium">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
