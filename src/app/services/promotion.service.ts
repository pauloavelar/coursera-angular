import { Injectable, Inject } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpClient } from '@angular/common/http';
import { HttpHandlingService } from './http-handling.service';

@Injectable()
export class PromotionService {

  constructor(
    private http: HttpClient,
    private handling: HttpHandlingService,
    @Inject('BaseURL') private baseURL: string
  ) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http
      .get<Promotion[]>(`${this.baseURL}promotions`)
      .catch(error => this.handling.handleError(error));
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.http
      .get<Promotion>(`${this.baseURL}promotions/${id}`)
      .catch(error => this.handling.handleError(error));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http
      .get<Promotion>(`${this.baseURL}promotions?featured=true`)
      .map(promotions => promotions[0])
      .catch(error => this.handling.handleError(error));
  }

}
