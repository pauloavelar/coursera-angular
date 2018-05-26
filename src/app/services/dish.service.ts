import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Dish } from '../shared/dish';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpHandlingService } from './http-handling.service';

@Injectable()
export class DishService {

  constructor(
    private http: HttpClient,
    private handling: HttpHandlingService,
    @Inject('BaseURL') private baseURL: string
  ) { }

  getDishes(): Observable<Dish[]> {
    return this.http
      .get<Dish[]>(`${this.baseURL}dishes`)
      .catch(error => this.handling.handleError(error));
  }

  getDish(id: number): Observable<Dish> {
    return this.http
      .get<Dish>(`${this.baseURL}dishes/${id}`)
      .catch(error => this.handling.handleError(error));
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http
      .get<Dish[]>(`${this.baseURL}dishes?featured=true`)
      .map(dishes => dishes[0])
      .catch(error => this.handling.handleError(error));
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => dishes.map(dish => dish.id))
      .catch(error => this.handling.handleError(error));
  }

}
