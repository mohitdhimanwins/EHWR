/* Core Modules*/ 
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InvoicesRouting } from './Invoices-routing.module';

/*Components */
import { InvoicesComponent } from './Components/Invoices/Invoices.component';

@NgModule({
    declarations:[
        InvoicesComponent
    ],
    imports:[
        InvoicesRouting,
        CommonModule,
        RouterModule, 
        FormsModule,
        ReactiveFormsModule,
    ],
    providers:[],
    bootstrap:[]
})
export class InvoicesModule{

}
