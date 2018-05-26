import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';

import 'rxjs/add/observable/throw';

@Injectable()
export class HttpHandlingService {

  public handleError (error: HttpErrorResponse | any): Observable<any> {
    let message: string;

    if (error instanceof HttpErrorResponse) {
      message = `${error.status} - ${error.statusText || ''}`;
    } else {
      message = error.message ? error.message : error.toString();
    }

    console.error(message);
    return Observable.throw(message);
  }

}
