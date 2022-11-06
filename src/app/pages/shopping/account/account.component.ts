import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
    private router: Router,
    private service: AccountService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    /**
     * Logout the user.
     */

    this.service.logout();
    this.router.navigate(['/']);
  }

  history() {
    this.router.navigate(['/history']);
  }

}
