import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(
    private service: AccountService
  ) { }

  onSubmit(data: any) {
    /**
     * Login the user.
     */

    data.value['user_type'] = "SHOPPER";
    
    this.service.login(data.value);
  }

}
