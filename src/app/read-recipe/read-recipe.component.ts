import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-recipe',
  templateUrl: './read-recipe.component.html',
  styleUrls: ['./read-recipe.component.css'],
})
export class ReadRecipeComponent implements OnInit {
  recipeForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const recipe = this.route.snapshot.data['recipe'];

    this.recipeForm = this.fb.group({
      name: [{ value: recipe.name, disabled: true }],
      prepTimeMinutes: [{ value: recipe.prepTimeMinutes, disabled: true }],
      cookTimeMinutes: [{ value: recipe.cookTimeMinutes, disabled: true }],
      cuisine: [{ value: recipe.cuisine, disabled: true }],
    });
  }
}