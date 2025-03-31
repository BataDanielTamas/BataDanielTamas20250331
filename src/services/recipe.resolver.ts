import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolver implements Resolve<any> {
  constructor(private recipeService: RecipeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.params['id']; // Az ID kinyerése az útvonal paraméterből
    return this.recipeService.getRecipeById(id);
  }
}