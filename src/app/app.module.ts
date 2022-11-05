import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { NavigationMenuComponent } from './menu/navigation-menu/navigation-menu.component';
import { AccountMenuComponent } from './menu/account-menu/account-menu.component';
import { NavigationMenuButtonComponent } from './menu/navigation-menu-button/navigation-menu-button.component';
import { ShopComponent } from './pages/shopping/shop/shop.component';
import { ShopFilterComponent } from './components/shop/shop-filter/shop-filter.component';
import { ShopItemComponent } from './components/shop/shop-item/shop-item.component';
import { ShopRenderComponent } from './components/shop/shop-render/shop-render.component';

import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/shopping/account/account.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    NavigationMenuComponent,
    AccountMenuComponent,
    NavigationMenuButtonComponent,
    ShopComponent,
    ShopFilterComponent,
    ShopItemComponent,
    ShopRenderComponent,
    LoginComponent,
    AccountComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-CSRF-TOKEN'
    }),
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
