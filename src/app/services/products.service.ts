import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(filter: any = null) {
    /**
     * Get products, filters need to be added.
     */

    return this.http.get(environment.API_URL + 'products', { withCredentials: true })
  }

}
