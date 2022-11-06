import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getProduct(params: any) {
    /**
     * Get product by brand and slug.
     */

    return this.http.get(environment.API_URL + 'product', { withCredentials: true, params: params })
  }

  addToCart(data: any) {
    /**
     * Add product to cart.
     */

    let headers = new HttpHeaders({
      'X-CSRFTOKEN': 'CyTiGKPVOrf1PqWmUgaYCWNBXVkruWj0'
    });
    return this.http.post(environment.API_URL + 'add_to_cart', data, { withCredentials: true, headers: headers })
  }

  getCart() {
    /**
     * Get cart of a user.
     */

    return this.http.get(environment.API_URL + 'cart', { withCredentials: true })
  }

  getHistory() {
    /**
     * Get history of a user.
     */

    return this.http.get(environment.API_URL + 'history', { withCredentials: true })
  }
}
