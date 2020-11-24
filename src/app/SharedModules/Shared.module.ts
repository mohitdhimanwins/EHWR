/* Core Modules*/ 
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../MaterialModule/Material/Material.module';
import { HeaderComponent } from './Components/Header/Header.component';


@NgModule({
    declarations:[
        HeaderComponent
    ],
    imports:[
        MaterialModule,
        CommonModule,
        RouterModule, 
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[
        HeaderComponent
    ],
    providers:[],
    bootstrap:[]
})
export class SharedModule{

}