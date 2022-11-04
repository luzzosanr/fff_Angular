import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-render',
  templateUrl: './shop-render.component.html',
  styleUrls: ['./shop-render.component.css']
})
export class ShopRenderComponent implements OnInit {
  items: any[] = [];

  constructor() {
    this.items = [
      {
        name: 'Item 1',
        price: 100,
        image: 'http://localhost:8000/media/products/514BBy8H2fS._AC_UX385__nHXMJjJ.jpg'
      },
      {
        name: 'Item 2',
        price: 200,
        image: 'http://localhost:8000/media/products/Dream-Merch-sweat-capuche-pour-hommes-et-femmes-pull-Harajuku-tracksuie-2021-pour-hommes-Streetwear-d_r6v1SyN.jpg'
      },
      {
        name: 'Item 3',
        price: 300,
        image: 'http://localhost:8000/media/products/topg-merch-store.jpg'
      }
    ];
  }

  ngOnInit(): void {
  }

}
