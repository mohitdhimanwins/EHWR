/* Core Modules*/ 
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../MaterialModule/Material/Material.module';

/*Components*/
import { CustomersComponent } from './Components/Customers/Customers.component';
import { CustomersListComponent } from './Components/Customers/CustomersList/CustomersList.component';
import { NewCustomerComponent } from './Components/Customers/NewCustomer/NewCustomer.component';
import { ContactComponent } from './Components/Customers/NewCustomer/_subs/Contact/Contact.component';
import { DetailsComponent } from './Components/Customers/NewCustomer/_subs/Details/Details.component';

/*Routing*/ 
import { CustomerRouting } from './Customer.routing.modules';

@NgModule({
    declarations:[
        CustomersComponent,
        NewCustomerComponent,
        CustomersListComponent,
        DetailsComponent,
        ContactComponent 
    ],
    imports:[
        CustomerRouting,
        CommonModule,
        RouterModule, 
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    
    providers:[],
    bootstrap:[]
})
export class CustomerModule{

}