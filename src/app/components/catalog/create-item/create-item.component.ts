import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment, Product } from 'src/environments/environment';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-create-item[product]',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  @Input() product: Product = new Product();
  @Output() onValidation: any = new EventEmitter();
  environment = environment;

  constructor(
    private service: BrandsService
  ) { }

  ngOnInit(): void {
  }

  uploadImage(event: any) {
    this.product.image = event.target.files[0];
  }

  modify() {

    let form = new FormData();
    form.append('name', this.product.name);
    form.append('price', this.product.price.toString());
    form.append('slug', this.product.slug);
    form.append('description', this.product.description);
    form.append('is_available', this.product.is_available ? '1' : '0');
    if (this.product.image) {
      form.append('image', this.product.image);
    }
    this.service.updateProduct(form);
    this.onValidation.emit();
  }

}