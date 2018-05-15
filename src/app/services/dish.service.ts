import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable()
export class DishService {

  getDishes(): Dish[] {
    return DISHES;
  }

  getDish(id: number): Dish {
    return DISHES.find(dish => dish.id === id);
  }

  getFeaturedDish(): Dish {
    return DISHES.find(dish => dish.featured);
  }

}
