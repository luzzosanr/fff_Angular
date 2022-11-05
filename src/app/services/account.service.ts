import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

    this.http.post(environment.API_URL + 'login', data, { withCredentials: true }).subscribe( (data:any) => {
      if (data.status != 'not logged') {
        this.router.navigate(['/']);
      }
    });
  }

  register(data: any) {
    /**
     * Register the user.
     */

    this.http.post<Account>(environment.API_URL + 'register', data, { withCredentials: true }).subscribe( (data:any) => {
      if (data.status == 'Shopper registered') {
        this.router.navigate(['/']);
      } else if (data.status == 'Brand registered') {
        this.router.navigate(['/admin']);
      }
    });
  }
}

class Account {
  username: string ="";
  password: string = "";
  user_type: string = "";
}