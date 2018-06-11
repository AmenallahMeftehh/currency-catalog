import {Currency} from '../shared/model/Currency';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { SERVER_API_URL } from './../app.constants';


@Injectable()
export class CurrencyService {
    private resource = SERVER_API_URL ;

  constructor(private http: HttpClient) {
  }

  /*************************
   * GET all currencies
   ************************/

  getCurrencies(): Observable<any> {
    return this.http.get(this.resource + 'currencies');
  }

}

