import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { AccountService } from 'src/app/services/account.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  address = new FormControl('');

  constructor(
    private productsService: ProductsService,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.accountService.getPaymentProfile().subscribe( (data:any) => {
      /**
       * Can be done with form group if more fields are added.
       */
      this.address.setValue(data.address);
    })
  }

  onSubmit(data: any) {
    this.productsService.accessPayment({"address": this.address.value});
  }
}