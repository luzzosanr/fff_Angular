import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  constructor(
    private service: AccountService
  ) { }

  onSubmit(data: any) {
    /**
     * Register the user.
     */

    console.log(data.value);
    
    this.service.register(data.value);
  }
}
