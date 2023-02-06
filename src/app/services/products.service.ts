import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
    private router: Router,
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
      'X-CSRFTOKEN': 'OYPlnPDcOEA9wjI1PKW3uhVm6qRi1cRX'
    });
    return this.http.post(environment.API_URL + 'add_to_cart', data, { withCredentials: true, headers: headers })
  }

  accessPayment(data: any) {
    let headers = new HttpHeaders({
      'X-CSRFTOKEN': 'OYPlnPDcOEA9wjI1PKW3uhVm6qRi1cRX'
    });
    this.http.post(environment.API_URL + 'payment', data, { withCredentials: true, headers: headers }).subscribe( (data:any) => {
      window.location.href = data.url;
    })
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
