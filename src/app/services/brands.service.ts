import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(
    private http: HttpClient,
    private account: AccountService
  ) { }

  getCatalog() {
    return this.http.get(environment.API_URL + 'admin/brand/catalog', { withCredentials: true });
  }

  updateStock(data: any) {
    return this.http.post(environment.API_URL + 'admin/brand/update/stock', data, { withCredentials: true, headers: environment.get_csrf_headers() }).subscribe((data: any) => {
      this.account.checkStatus(data.status)
    });
  }

  updateProduct(data: any) {
    return this.http.post(environment.API_URL + 'admin/brand/update/product', data, { withCredentials: true, headers: environment.get_csrf_headers() }).subscribe((data: any) => {
      this.account.checkStatus(data.status)
    });
  }

}
