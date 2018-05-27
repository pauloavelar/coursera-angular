import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';

import { Dish } from '../shared/dish';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class DishService {

  RESOURCE = 'dishes';
  dishes: Restangular;

  constructor(
    private rest: Restangular
  ) {
    this.dishes = this.rest.service(this.RESOURCE);
  }

  getDishes(): Observable<Dish[]> {
    return this.dishes.getList();
  }

  getDish(id: number): Observable<Dish> {
    return this.dishes.get(id);
  }

  getFeaturedDish(): Observable<Dish> {
    return this.dishes
      .getList({ featured: true })
      .map(results => results[0]);
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => dishes.map(dish => dish.id));
  }

  save(dish: Dish): Observable<Dish> {
    return (dish as any).save(dish);
  }

}
