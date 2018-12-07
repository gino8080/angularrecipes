import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { RecipesService } from 'src/app/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() currentRicetta: Recipe = null;

  constructor(private service: RecipesService) { }

  ngOnInit() {
    console.log("On init")
    this.service.recipeChanged.subscribe(
      newRecipe => {
        console.log("New recipe in detail");
        this.currentRicetta = newRecipe;
      },
      error => console.error(error)
    );
  }

}
