import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'recipes',
    component : RecipesComponent
    },
  {
    path: 'home',
    component: HomeComponent
    },
  {
    path: '**',
    redirectTo: "home"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
