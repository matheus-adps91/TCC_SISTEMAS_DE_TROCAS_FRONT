// Built-in
import { Routes, RouterModule } from '@angular/router';

// Components
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { ProductComponent } from './product/product.component';

export const appRoutes: Routes = [
    {
        path: 'signin', component: SignInComponent
    },
    {
        path: 'signup', component: SignUpComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'product', component: ProductComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);