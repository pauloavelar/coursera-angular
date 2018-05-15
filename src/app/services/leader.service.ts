import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  getLeaders(): Leader[] {
    return LEADERS;
  }

  getFeaturedLeader(): Leader {
    return LEADERS.find(leader => leader.featured);
  }

}
