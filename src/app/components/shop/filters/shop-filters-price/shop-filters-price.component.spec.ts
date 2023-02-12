import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFiltersPriceComponent } from './shop-filters-price.component';

describe('ShopFiltersPriceComponent', () => {
  let component: ShopFiltersPriceComponent;
  let fixture: ComponentFixture<ShopFiltersPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopFiltersPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopFiltersPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
