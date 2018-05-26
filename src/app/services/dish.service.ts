import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Dish } from '../shared/dish';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DishService {

  constructor(
    private http: HttpClient,
    @Inject('BaseURL') private baseURL: string
  ) { }

  getDishes(): Observable<Dish[]> {
    return this.http
      .get<Dish[]>(`${this.baseURL}dishes`);
  }

  getDish(id: number): Observable<Dish> {
    return this.http
      .get<Dish>(`${this.baseURL}dishes/${id}`);
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http
      .get<Dish[]>(`${this.baseURL}dishes?featured=true`)
      .map(dishes => dishes[0]);
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => dishes.map(dish => dish.id));
  }

}
