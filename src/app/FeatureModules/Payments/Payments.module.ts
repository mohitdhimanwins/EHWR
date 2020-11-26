/* Core Modules*/ 
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaymentsRouting } from './Payments-routing.module';

/*Components*/
import { PaymentsComponent } from './Components/Payments/Payments.component';



@NgModule({
    declarations:[
       PaymentsComponent
    ],
    imports:[
        PaymentsRouting,
        CommonModule,
        RouterModule, 
        FormsModule,
        ReactiveFormsModule
    ],
    providers:[],
    bootstrap:[]
})
export class PaymentsModule{

}