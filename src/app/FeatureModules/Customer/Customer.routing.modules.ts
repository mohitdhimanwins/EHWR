/*Core Modules*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './Components/Customers/Customers.component';

/*Components*/ 

import { CustomersListComponent } from './Components/Customers/CustomersList/CustomersList.component';
import { NewCustomerComponent } from './Components/Customers/NewCustomer/NewCustomer.component';


/*Routes*/ 
const routes: Routes = [
   { path:'', component:CustomersComponent,children:[
     { path:'', component:CustomersListComponent},
     { path:'NewC', component:NewCustomerComponent},
     
   ]},

  
  ];
@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRouting{

}