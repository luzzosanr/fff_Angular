import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/services/brands.service';
import { Product } from 'src/environments/environment';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: Product[] = []
  modifying: String = "";
  available: boolean = true; // Whether is showing available products or unavailable products

  constructor(
    private service: BrandsService,
    private account: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getCatalog().subscribe((data: any) => {
      if (this.account.checkStatus(data.status)) {
        this.products = data.products;
      }
    });
  }

  update(data: any) {
    this.service.updateStock({"stock": data.value["is_unlimited"] ? -1 : data.value["new_stock"], "slug": data.value['slug']});
  }

  detail(slug: String) {
    this.modifying = slug;
  }

  set availableProducts(available: boolean) {
    this.available = available;
  }

  
  logout() {
    /**
     * Logout the user.
     */

    this.account.logout();
    this.router.navigate(['/admin/login/']);
  }
}
