import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <div *ngFor="let currentRecipe of recipes">
    <h2>{{currentRecipe.name}}</h2>
    <h5>{{currentRecipe.instructions}}</h5>
      <ul>
        <li>{{currentRecipe.ingredients}}</li>
      </ul>
    </div>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Lasanga', 'Preheat oven to 375 degrees', 'sauce, cheese, pasta'),
    new Recipe('Pho','Preheat oven to 375 degrees','sauce, cheese, pasta'),
    new Recipe('Tacos','Preheat oven to 375 degrees','sauce, cheese, pasta')
  ];
}

export class Recipe {
  constructor(public name: string,  public instructions: string, public ingredients: string){

  }
}
