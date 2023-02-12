import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFiltersBrandsComponent } from './shop-filters-brands.component';

describe('ShopFiltersBrandsComponent', () => {
  let component: ShopFiltersBrandsComponent;
  let fixture: ComponentFixture<ShopFiltersBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopFiltersBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopFiltersBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
