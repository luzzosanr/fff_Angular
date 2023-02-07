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
  errorMessage: string = '';
  
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
    
    this.service.login(data.value).subscribe( (res:any) => {
      if ((res.status == 'success' || res.status == "already logged") && data.value.user_type == 'SHOPPER')
      {
        this.router.navigate(['/']);
      }
      else if ((res.status == 'success' || res.status == "already logged") && data.value.user_type == 'BRAND')
      {
        this.router.navigate(['/admin']);
      }

      if (res.status == 'wrong credentials') {
        this.errorMessage = 'Wrong credentials';
      }

    });
  }

  register() {
    this.router.navigate(['/register']);
  }

}
