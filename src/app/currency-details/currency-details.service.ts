import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CurrencyDetailsService {

  constructor(private http: HttpClient) {
  }

  /*************************
   * GET currency details
   ************************/

  getCurrencyDetailsById(currencyId): Observable<any> {
    return this.http.get('https://api.openfintech.io/v1/currencies/' + currencyId);
  }
}
