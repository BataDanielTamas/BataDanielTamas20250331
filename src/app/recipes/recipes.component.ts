import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: any[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((response) => {
      this.recipes = response.recipes; // Az API válaszban a receptek a "recipes" kulcs alatt vannak
    });
  }

  viewRecipe(id: number): void {
    this.router.navigate([`/recipes/read/${id}`]);
  }

  editRecipe(id: number): void {
    this.router.navigate([`/recipes/update/${id}`]);
  }
}