/*Core Modules*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Components*/ 
import { CustomersComponent } from './Components/Customers/Customers.component';


/*Routes*/ 
const routes: Routes = [
   { path:'', component:CustomersComponent},
  
  ];
@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRouting{

}