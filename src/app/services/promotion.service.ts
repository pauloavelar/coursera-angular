import { Injectable, Inject } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PromotionService {

  constructor(
    private http: HttpClient,
    @Inject('BaseURL') private baseURL: string
  ) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http
      .get<Promotion[]>(`${this.baseURL}promotions`);
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.http
      .get<Promotion>(`${this.baseURL}promotions/${id}`);
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http
      .get<Promotion>(`${this.baseURL}promotions?featured=true`)
      .map(promotions => promotions[0]);
  }

}
