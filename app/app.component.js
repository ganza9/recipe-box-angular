"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.recipes = [
            new Recipe('Lasanga', 'Preheat oven to 375 degrees', 'sauce, cheese, pasta'),
            new Recipe('Pho', 'Preheat oven to 375 degrees', 'sauce, cheese, pasta'),
            new Recipe('Tacos', 'Preheat oven to 375 degrees', 'sauce, cheese, pasta')
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n  <div class=\"container\">\n    <h1>Recipe Box</h1>\n    <div *ngFor=\"let currentRecipe of recipes\">\n    <h2>{{currentRecipe.name}}</h2>\n    <h5>{{currentRecipe.instructions}}</h5>\n      <ul>\n        <li>{{currentRecipe.ingredients}}</li>\n      </ul>\n    </div>\n  </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Recipe = (function () {
    function Recipe(name, instructions, ingredients) {
        this.name = name;
        this.instructions = instructions;
        this.ingredients = ingredients;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
//# sourceMappingURL=app.component.js.map