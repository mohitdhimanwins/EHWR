/* Core Modules*/ 
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReportsRouting } from './Reports-routing.module';


/*Components*/
import { ReportsComponent } from './Components/Reports/Reports.component';




@NgModule({
    declarations:[
       ReportsComponent
    ],
    imports:[
        ReportsRouting,
        CommonModule,
        RouterModule, 
        FormsModule,
        ReactiveFormsModule
    ],
    providers:[],
    bootstrap:[]
})
export class ReportsModule{

}