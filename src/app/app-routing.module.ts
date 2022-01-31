import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '' , component:UserLoginComponent}, //default component
  {path:'user-login', component:UserLoginComponent},
  {path: 'products' , component: ProductsComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
