import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {
  private recipeIndex: 1;
  private subscription: Subscription;

  selectedRecipe: Recipe;

  constructor(private router: Router,
    private route: ActivatedRoute ) {
    }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];

      });
    console.log('selected', this.recipeIndex);
  }

    onEdit() {
      this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
    }

    onDelete() {
      this.router.navigate(['recipes']);
    }


}
