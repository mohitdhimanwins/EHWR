/* Core Modules*/ 
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



/*Components*/
import { CustomersComponent } from './Components/Customers/Customers.component';
import { CustomersListComponent } from './Components/Customers/CustomersList/CustomersList.component';
import { NewCustomerComponent } from './Components/Customers/NewCustomer/NewCustomer.component';

/*Routing*/ 
import { CustomerRouting } from './Customer.routing.modules';

@NgModule({
    declarations:[
        CustomersComponent,
        NewCustomerComponent,
        CustomersListComponent
    ],
    imports:[
        CustomerRouting,
        CommonModule,
        RouterModule, 
        FormsModule,
        ReactiveFormsModule
    ],
    providers:[],
    bootstrap:[]
})
export class CustomerModule{

}