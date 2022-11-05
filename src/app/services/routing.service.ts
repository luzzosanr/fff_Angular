import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(
    private router: Router
  ) { }
  
  isAdmin(): boolean {
    /**
     * @return whether the user is on the shopping website.
     */

    return this.router.url.includes('admin');
  }
}
