import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { AccountService } from 'src/app/services/account.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyItems: any = [];
  environment = environment;

  constructor(
    private productsService: ProductsService,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productsService.getHistory().subscribe( (data:any) => {
      if (this.accountService.checkStatus(data.status)) {
        this.historyItems = data.history;
      }
    });
  }

}
