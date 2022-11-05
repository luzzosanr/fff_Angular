import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(
    private service: AccountService,
    private routingService: RoutingService,
    private router: Router
  ) { }

  onSubmit(data: any) {
    /**
     * Login the user.
     */

    data.value['user_type'] = this.routingService.isAdmin() ? 'BRAND' : 'SHOPPER';
    console.log(data.value);
    
    this.service.login(data.value);
  }

  register() {
    this.router.navigate(['/register']);
  }

}
