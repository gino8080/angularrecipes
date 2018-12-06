import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

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

  ingredients  = {
    nome : "Aglio",
    peso : "5g"
  };

  recipes: Recipe[] = [
    this.ricetta,
    this.ricetta2,
    this.ricetta3
     ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  onSelectedList(event) {
    console.log("Elemento lista selezionato", event);
  }

  constructor() {

   }

  ngOnInit() {
  }

}
