import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import productBox from "@/assets/product-box.jpg";
import chefAbout from "@/assets/chef-about.jpg";
import { recipes } from "@/data/recipes";

const Index = () => {
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBanner})`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in">
            DINNER THAT BRINGS
            <br />
            EVERYONE TOGETHER
          </h1>
          <p className="text-xl md:text-3xl mb-8 md:mb-10 font-medium animate-fade-in">
            Fast, Fresh, and Full of Flavor
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-white font-semibold px-8 md:px-10 py-6 text-base md:text-lg animate-scale-in"
            asChild
          >
            <a href="#products">
              View Products <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Cook fresh | Eat better | Feel happier
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Every EasyPans box is designed to help you enjoy cooking real food,
              balanced, flavorful, and prepared with love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <Card className="p-6 md:p-8 text-center border-2 hover:border-primary transition-colors">
              <CheckCircle2 className="h-12 w-12 md:h-16 md:w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Fresh ingredients</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Handpicked, farm-fresh ingredients delivered to your door
              </p>
            </Card>
            <Card className="p-6 md:p-8 text-center border-2 hover:border-primary transition-colors">
              <CheckCircle2 className="h-12 w-12 md:h-16 md:w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">No preservatives</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Pure, natural ingredients without any artificial additives
              </p>
            </Card>
            <Card className="p-6 md:p-8 text-center border-2 hover:border-primary transition-colors">
              <CheckCircle2 className="h-12 w-12 md:h-16 md:w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Authentic taste</h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Restaurant-quality flavors made easy at home
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Say goodbye to kitchen stress
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">COOK BETTER</h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                With pre-measured ingredients and easy instructions, you'll spend less time
                preparing and more time enjoying your meal. No planning. No waste. Just pure
                joy in every bite.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm md:text-base">Pre-measured portions for perfect results every time</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm md:text-base">Step-by-step instructions anyone can follow</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm md:text-base">Zero food waste with exact quantities</p>
                </div>
              </div>
              <Button size="lg" className="font-semibold">
                View Products
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={productBox}
                alt="EasyPans Product Box"
                className="rounded-lg shadow-[var(--card-shadow)] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <img
                src={chefAbout}
                alt="Our Chef"
                className="rounded-lg shadow-[var(--card-shadow)] w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">EAT WELL, FEEL GREAT</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                At EasyPans, we believe that cooking should be a joy, not a chore. That's why
                we've created meal kits that make home cooking accessible, enjoyable, and
                delicious for everyone.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Our team of experienced chefs carefully curates each recipe, ensuring a
                perfect balance of nutrition and flavor. We source the freshest ingredients
                from trusted suppliers, delivering them straight to your doorstep.
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                Join thousands of happy families who have transformed their dinner routines
                with EasyPans. Cook fresh, eat better, and feel happier every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Recipes</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Discover delicious meals you can make with EasyPans
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {featuredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
                cookTime={recipe.cookTime}
                serves={recipe.serves}
                description={recipe.description}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="font-semibold" asChild>
              <Link to="/recipes">
                View All Recipes <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
