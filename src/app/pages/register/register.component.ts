import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userType: string = "SHOPPER"
  fieldErrors: any = {
    email: null,
    password: null,
    type: null
  };


  constructor(
    private service: AccountService,
    private router: Router
  ) { }

  onSubmit(data: any) {
    /**
     * Register the user.
     */
    this.service.register(data.value).subscribe( (res:any) => {
      for (let key in this.fieldErrors) {
        this.fieldErrors[key] = null;
      }

      console.log(res);
      console.log(res);

      if (res.status == 'success' && res.type == "shopper") {
        this.router.navigate(['/']);
      } else if (data.status == 'success' && res.type == "brand") {
        this.router.navigate(['/admin']);
      }

      if (res.status == 'invalid') {
        switch (res.field) {
          case 'email':
            this.fieldErrors.email = res.message;
            break;
          case 'password':
            this.fieldErrors.password = res.message;
            break;
          case 'type':
            this.fieldErrors.type = res.message;
            break;
        }
      }
    });
  }
}
