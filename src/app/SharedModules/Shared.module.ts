/* Core Modules*/ 
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../MaterialModule/Material/Material.module';
import { BreadcrumbComponent } from './Components/Breadcrumb/Breadcrumb.component';
import { HeaderComponent } from './Components/Header/Header.component';


@NgModule({
    declarations:[
        HeaderComponent,
        BreadcrumbComponent
    ],
    imports:[
        MaterialModule,
        CommonModule,
        RouterModule, 
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[
        HeaderComponent,
        BreadcrumbComponent
        
    ],
    providers:[],
    bootstrap:[]
})
export class SharedModule{

}