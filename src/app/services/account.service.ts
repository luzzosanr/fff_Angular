import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  logout() {
    /**
     * Logout the user.
     */

    this.http.get(environment.API_URL + 'logout', { withCredentials: true }).subscribe( (data:any) => {
      console.log(data);
    });
  }

  login(data: any) {
    /**
     * Login the user.
     */
    
    let headers = new HttpHeaders({
      'X-CSRFTOKEN': '20wBzRg8QtmcB67trruTy9VVxlEOM1Nb'
    });

    this.http.post(environment.API_URL + 'login', data, { withCredentials: true, headers }).subscribe( (res:any) => {
      if (res.status != 'not logged' && data['user_type'] == 'SHOPPER')
      {
        this.router.navigate(['/']);
      }
      else if (res.status != 'not logged' && data['user_type'] == 'BRAND')
      {
        this.router.navigate(['/admin']);
      }
    });
  }

  register(data: any) {
    /**
     * Register the user.
     */

    let headers = new HttpHeaders({
      'X-CSRFTOKEN': '20wBzRg8QtmcB67trruTy9VVxlEOM1Nb'
    });

    this.http.post<Account>(environment.API_URL + 'register', data, { withCredentials: true, headers }).subscribe( (data:any) => {
      if (data.status == 'Shopper registered') {
        this.router.navigate(['/']);
      } else if (data.status == 'Brand registered') {
        this.router.navigate(['/admin']);
      }
    });
  }

  checkStatus(status: string) {
    /**
     * Check the status of a request :
     * @return true if the request is a success.
     * Navigate to login page if the request is a not logged.
     * Navigate to admin's login page if the request is a not logged on admin page.
     */

    if (status == 'success') return true;

    if (status == 'not logged' && !this.router.url.includes('admin')) {
      this.router.navigate(['/login']);
      return false;
    }

    if (status == 'not logged') this.router.navigate(['/admin/login']);

    return false;
  }

  getPaymentProfile()
  {
    return this.http.get(environment.API_URL + 'get_payment_profile', { withCredentials: true });
  }
}

class Account {
  username: string ="";
  password: string = "";
  user_type: string = "";
}