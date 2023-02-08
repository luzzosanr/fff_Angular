import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFilterNameComponent } from './shop-filter-name.component';

describe('ShopFilterNameComponent', () => {
  let component: ShopFilterNameComponent;
  let fixture: ComponentFixture<ShopFilterNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopFilterNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopFilterNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
