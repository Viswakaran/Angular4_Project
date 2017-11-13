import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {Iproduct} from './products';

@Injectable()
export class ProductService{
private _ProductUrl = './api/products/products.json';
constructor(private _http: HttpClient) {}

  getProducts(): Observable<Iproduct[]> {
   return this._http.get<Iproduct[]>(this._ProductUrl)
     .do(data => console.log('All:' + JSON.stringify(data)))
     .catch(this.handleError)

}
  private handleError(err: HttpErrorResponse){
       console.log(err.message);
      return Observable.throw(err.message);
  }

}
