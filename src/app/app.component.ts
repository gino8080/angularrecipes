import { Component } from '@angular/core';
import { Recipe } from './recipes/recipe-list/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedRecipe: Recipe = null;

  onSelectedRecipe(recipe) {
    console.log("Ricetta ricevuta dal Nonno", recipe);
    this.selectedRecipe = recipe;
  }
}
