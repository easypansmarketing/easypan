import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, ChefHat, ShoppingCart, ArrowLeft } from "lucide-react";
import { recipes } from "@/data/recipes";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);
  const [servingSize, setServingSize] = useState(4);

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Recipe Not Found</h1>
            <Button asChild>
              <Link to="/recipes">Back to Recipes</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedRecipes = recipes.filter((r) => r.id !== recipe.id).slice(0, 4);
  const servingSizes = [2, 4, 6, 8];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-6 md:py-8 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/recipes">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Recipes
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
            <div>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full rounded-lg shadow-[var(--card-shadow)]"
              />
            </div>
            
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{recipe.title}</h1>
              {recipe.subtitle && (
                <p className="text-xl md:text-2xl text-muted-foreground mb-6">{recipe.subtitle}</p>
              )}
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 md:mb-8">
                <Card className="p-4 text-center">
                  <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-muted-foreground mb-1">Serves</p>
                  <p className="font-semibold">{recipe.serves}</p>
                </Card>
                <Card className="p-4 text-center">
                  <ChefHat className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-muted-foreground mb-1">Prep Time</p>
                  <p className="font-semibold">{recipe.prepTime}</p>
                </Card>
                <Card className="p-4 text-center">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-muted-foreground mb-1">Cook Time</p>
                  <p className="font-semibold">{recipe.cookTime}</p>
                </Card>
                {recipe.restTime && (
                  <Card className="p-4 text-center">
                    <Clock className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground mb-1">Rest Time</p>
                    <p className="font-semibold">{recipe.restTime}</p>
                  </Card>
                )}
              </div>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {recipe.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              <Card className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold">Ingredients</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Serves:</span>
                    <div className="flex gap-2">
                      {servingSizes.map((size) => (
                        <Button
                          key={size}
                          variant={servingSize === size ? "default" : "outline"}
                          size="sm"
                          onClick={() => setServingSize(size)}
                          className="w-10 h-10 p-0"
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {recipe.ingredients.map((category, idx) => (
                    <div key={idx}>
                      <h3 className="font-semibold text-lg mb-3">{category.category}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-6" />
                
                <Button size="lg" className="w-full font-semibold">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy Ingredients from EasyPans
                </Button>
              </Card>

              <Card className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Instructions</h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                        {idx + 1}
                      </span>
                      <p className="flex-1 pt-1">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </Card>
            </div>

            <div>
              <Card className="p-6 md:p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Nutrition Values</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="font-medium">Calories</span>
                    <span className="font-semibold text-primary">{recipe.nutrition.calories}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="font-medium">Protein</span>
                    <span className="font-semibold">{recipe.nutrition.protein}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="font-medium">Carbohydrates</span>
                    <span className="font-semibold">{recipe.nutrition.carbs}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="font-medium">Fat</span>
                    <span className="font-semibold">{recipe.nutrition.fat}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="font-medium">Fiber</span>
                    <span className="font-semibold">{recipe.nutrition.fiber}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sodium</span>
                    <span className="font-semibold">{recipe.nutrition.sodium}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            आबरा का डाबरा - More Recipes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
            {relatedRecipes.map((relatedRecipe) => (
              <RecipeCard
                key={relatedRecipe.id}
                id={relatedRecipe.id}
                title={relatedRecipe.title}
                image={relatedRecipe.image}
                cookTime={relatedRecipe.cookTime}
                serves={relatedRecipe.serves}
              />
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" className="font-semibold" asChild>
              <Link to="/recipes">View All Recipes</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RecipeDetail;
