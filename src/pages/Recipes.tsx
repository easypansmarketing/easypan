import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { recipes } from "@/data/recipes";

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);

  const keywords = ["Quick Meals", "Healthy", "Popular", "Vegetarian", "Indian", "Italian"];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesKeyword = !activeKeyword || recipe.keywords.includes(activeKeyword);
    
    return matchesSearch && matchesKeyword;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">FRESH TASTY HEALTHY</h1>
          <p className="text-lg md:text-xl">Explore our collection of delicious recipes</p>
        </div>
      </section>

      <section className="py-8 md:py-12 border-b bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative max-w-2xl mx-auto mb-6 md:mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search recipes by name or keyword..."
              className="pl-12 h-12 md:h-14 text-base md:text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Button
              variant={activeKeyword === null ? "default" : "outline"}
              onClick={() => setActiveKeyword(null)}
              className="font-medium"
            >
              All
            </Button>
            {keywords.map((keyword) => (
              <Button
                key={keyword}
                variant={activeKeyword === keyword ? "default" : "outline"}
                onClick={() => setActiveKeyword(keyword)}
                className="font-medium"
              >
                {keyword}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4 md:px-6">
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredRecipes.map((recipe) => (
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
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No recipes found. Try a different search or keyword.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
            We're constantly adding new recipes to our collection. Check back soon for more delicious options!
          </p>
          <Button size="lg" className="font-semibold">
            Subscribe for Updates
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recipes;
