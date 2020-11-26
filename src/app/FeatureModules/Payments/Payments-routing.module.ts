/*Core Modules*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Components*/ 
import { PaymentsComponent } from './Components/Payments/Payments.component';

/*Routes*/ 
const routes: Routes = [
    {path:'',component:PaymentsComponent}

   ];
 @NgModule({
     declarations:[],
     imports:[RouterModule.forChild(routes)],
     exports: [RouterModule]
 })
 export class PaymentsRouting{
 
 }