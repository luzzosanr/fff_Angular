import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { ShopComponent } from './pages/shopping/shop/shop.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/shopping/account/account.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
    {path: '', component: ShopComponent},
    {path: 'login', component: LoginComponent},
    {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
    {path: 'register', component: RegisterComponent},
    {path: 'admin', children: [
        {path: 'login', component: LoginComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }