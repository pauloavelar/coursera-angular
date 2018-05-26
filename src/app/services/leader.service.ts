import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Leader } from '../shared/leader';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class LeaderService {

  constructor(
    private http: HttpClient,
    @Inject('BaseURL') private baseURL: string
  ) { }

  getLeaders(): Observable<Leader[]> {
    return this.http
      .get<Leader[]>(`${this.baseURL}leaders`);
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http
      .get<Leader[]>(`${this.baseURL}leaders?featured=true`)
      .map(leaders => leaders[0]);
  }

}
