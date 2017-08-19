import { Component, OnInit } from '@angular/core';

// Models
import { Ingredient } from '../../../shared/models/ingredient';

// Services
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getitems();
  }

}
