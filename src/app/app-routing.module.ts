import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { ShopComponent } from './pages/shopping/shop/shop.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/shopping/account/account.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductComponent } from './pages/shopping/product/product.component';
import { CartComponent } from './pages/shopping/cart/cart.component';
import { HistoryComponent } from './pages/shopping/history/history.component';
import { CatalogComponent } from './pages/brands/catalog/catalog.component';
import { AddressFormComponent } from './pages/shopping/buying/address-form/address-form.component';

const routes: Routes = [
    {path: '', component: ShopComponent},
    {path: 'login', component: LoginComponent},
    {path: 'account', component: AccountComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'cart', component: CartComponent},
    {path: 'history', component: HistoryComponent},
    {path: 'checkout/address', component: AddressFormComponent},
    {path: 'admin', children: [
        {path: '', component: CatalogComponent},
        {path: 'login', component: LoginComponent},
        {path: 'logout', component: AccountComponent},
    ]},
    {path: ':brand/:slug', component: ProductComponent},
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }