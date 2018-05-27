import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { flyInOut, expand } from '../app.animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [ flyInOut(), expand() ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errorMessage: string;

  constructor(
    private dishService: DishService,
    @Inject('BaseURL') private baseURL: string
  ) { }

  ngOnInit() {
    this.dishService.getDishes()
      .subscribe(
        dishes => this.dishes = dishes,
        error => this.errorMessage = error
      );
  }

}
