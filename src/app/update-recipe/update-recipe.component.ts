import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css'],
})
export class UpdateRecipeComponent implements OnInit {
  recipeForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {

    const recipe = this.route.snapshot.data['recipe'];

    this.recipeForm = this.fb.group({
      name: [recipe.name, [Validators.required]],
      prepTimeMinutes: [recipe.prepTimeMinutes, [Validators.required, Validators.min(5)]],
      cookTimeMinutes: [recipe.cookTimeMinutes, [Validators.required, Validators.min(5)]],
      cuisine: [recipe.cuisine, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.recipeForm.valid) {
      console.log('Updated Recipe:', this.recipeForm.value);
    }
  }
}