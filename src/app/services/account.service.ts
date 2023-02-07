import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
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

    return this.http.post(environment.API_URL + 'login', data, { withCredentials: true, headers: this.csrfHeader()})
  }

  register(data: any) {
    /**
     * Register the user.
     */

    return this.http.post<Account>(environment.API_URL + 'register', data, { withCredentials: true, headers: this.csrfHeader() })
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

  csrfHeader()
  {
    /**
     * Get the CSRF header.
     * @return the CSRF header.
     */

    return new HttpHeaders({
      'X-CSRFTOKEN': this.cookieService.get('csrftoken')
    });
  }
}

class Account {
  username: string ="";
  password: string = "";
  user_type: string = "";
}