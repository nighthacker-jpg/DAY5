import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
   {
    path: '', component: LoginComponent 
   },
   {
    path: 'home', component: HomeComponent 
   } ,
   {
    path:'product/:id', component:ProductComponent
   },

];
