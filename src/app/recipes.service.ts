import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from './recipes/recipe-list/recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecipesService {


  URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=cake";


  ricetta: Recipe = new Recipe(
    "Patate riso e cozze",
    "Lorem ipsum dsa dsa ",
    "https://ips.plug.it/cips/buonissimo.org/cms/2012/04/tiella-di-riso-patate-e-cozze.jpg"
  );
  ricetta2: Recipe = new Recipe(
    "Spaghetti",
    "Lorem ipsum dsa dsa ",
    "https://loremflickr.com/320/240/spaghetti",
    true
  );
  ricetta3: Recipe = new Recipe(
    "Food dsadsa",
    "Lorem ipsum dsa dsa ",
    "https://loremflickr.com/640/340/food"
  );

  ingredients = {
    nome: "Aglio",
    peso: "5g"
  };

   recipes: Recipe[] = [
    this.ricetta,
    this.ricetta2,
    this.ricetta3
  ];

  recipeChanged = new EventEmitter<Recipe>();
  selectedRecipe: Recipe = null;

  public changeSelectedRecipe(ricetta: Recipe) {
    console.log("changeSelectedRecipe", ricetta);
    this.selectedRecipe = ricetta;
   // this.recipes.push(this.ricetta3);
   this.recipeChanged.emit(this.selectedRecipe);
  }

  public getRecipe() {
    return this.selectedRecipe;
  }


  searchRecipes = () => {
    return this.http.get(this.URL);

  }

  constructor(private http: HttpClient) {
    const ricette = this.searchRecipes().subscribe(
      response => {
        console.log(response);
        return response;
      },
      err => { console.error(err); }
    );
  }
}
