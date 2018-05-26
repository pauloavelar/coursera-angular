import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';

import { Dish } from '../shared/dish';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class DishService {

  RESOURCE = 'dishes';

  constructor(
    private rest: Restangular
  ) { }

  getDishes(): Observable<Dish[]> {
    return this.rest.all(this.RESOURCE).getList();
  }

  getDish(id: number): Observable<Dish> {
    return this.rest.one(this.RESOURCE, id).get();
  }

  getFeaturedDish(): Observable<Dish> {
    return this.rest
      .all(this.RESOURCE)
      .getList({ featured: true })
      .map(results => results[0]);
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => dishes.map(dish => dish.id));
  }

}
