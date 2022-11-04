import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuButtonComponent } from './navigation-menu-button.component';

describe('NavigationMenuButtonComponent', () => {
  let component: NavigationMenuButtonComponent;
  let fixture: ComponentFixture<NavigationMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationMenuButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
