import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  loggedIn: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : boolean
  {
    /**
     * If the user is logged in, return true.
     * Otherwise, redirect to the login page.
     */
    this.isLoggedIn();
    if (this.loggedIn) return true;
    this.router.navigate(['/login']);
    return false;
  }

  isLoggedIn() {
    /**
     * Check if the user is logged in.
     */
    
    this.http.get(environment.API_URL + 'isloggedin', { withCredentials: true }).subscribe( (data:any) => {
      this.loggedIn = data.status == "logged";
    });
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
