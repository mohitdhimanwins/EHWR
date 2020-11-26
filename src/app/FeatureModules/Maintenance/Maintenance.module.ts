/* Core Modules*/ 
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaintenanceRouting } from './Maintenance-routing.module';

/*Components*/
import { MaintenanceComponent } from './Components/Maintenance/Maintenance.component';

@NgModule({
    declarations:[
       MaintenanceComponent
    ],
    imports:[
        MaintenanceRouting,
        CommonModule,
        RouterModule, 
        FormsModule,
        ReactiveFormsModule
    ],
    providers:[],
    bootstrap:[]
})
export class MaintenanceModule{

}