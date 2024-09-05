import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _HttpClient = inject(HttpClient);

  getAllProducts():Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/products`);
  }

  getSpecificProduct(id:string | null):Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/products/${id}`)
  }

}
