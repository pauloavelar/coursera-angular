import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Leader } from '../shared/leader';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { HttpHandlingService } from './http-handling.service';

@Injectable()
export class LeaderService {

  constructor(
    private http: HttpClient,
    private handling: HttpHandlingService,
    @Inject('BaseURL') private baseURL: string
  ) { }

  getLeaders(): Observable<Leader[]> {
    return this.http
      .get<Leader[]>(`${this.baseURL}leaders`)
      .catch(error => this.handling.handleError(error));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http
      .get<Leader[]>(`${this.baseURL}leaders?featured=true`)
      .map(leaders => leaders[0])
      .catch(error => this.handling.handleError(error));
  }

}
