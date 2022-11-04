import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { ShopComponent } from './pages/shopping/shop/shop.component';
import { LoginComponent } from './pages/shopping/login/login.component';
import { AccountComponent } from './pages/shopping/account/account.component';

const routes: Routes = [
    {path: '', component: ShopComponent},
    {path: 'login', component: LoginComponent},
    {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
    {path: 'admin', children: [
        {path: ''}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }