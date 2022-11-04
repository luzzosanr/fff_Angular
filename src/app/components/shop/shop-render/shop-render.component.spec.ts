import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopRenderComponent } from './shop-render.component';

describe('ShopRenderComponent', () => {
  let component: ShopRenderComponent;
  let fixture: ComponentFixture<ShopRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
