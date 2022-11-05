import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent {
  @Input() item: any;

  full_link_image(link: string) {
    return environment.API_URL_IMAGES + link;
  }

}
