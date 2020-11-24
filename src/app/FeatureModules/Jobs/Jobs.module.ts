/* Core Modules*/ 
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AddJobsComponent } from './Components/Jobs/AddJobs/AddJobs.component';
import { JobsComponent } from './Components/Jobs/Jobs.component';
import { JobsListComponent } from './Components/Jobs/JobsList/JobsList.component';
import { JobsRouting } from './Jobs-routing.module';



@NgModule({
    declarations:[
        JobsComponent,
        AddJobsComponent,
        JobsListComponent
    ],
    imports:[
        JobsRouting,
        CommonModule,
        RouterModule, 
        FormsModule,
        ReactiveFormsModule
        
    ],
    providers:[],
    bootstrap:[]
})
export class JobsModule{

}