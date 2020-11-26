/*Core Modules*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Components*/ 
import { AddJobsComponent } from './Components/Jobs/AddJobs/AddJobs.component';
import { JobsComponent } from './Components/Jobs/Jobs.component';
import { JobsListComponent } from './Components/Jobs/JobsList/JobsList.component';

/*Routes*/ 
const routes: Routes = [
   { path:'', component:JobsComponent,children:[
     { path:'', component:JobsListComponent},
     { path:'AddJobs', component:AddJobsComponent},
   ]},
  
  ];
@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobsRouting{

}