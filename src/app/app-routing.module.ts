/*Modules*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Components*/
import { ContentLayoutComponent } from './ContentLayout/ContentLayout.component';
import { LoginComponent } from './CoreModules/Components/Login/Login.component';


/*Routes*/ 
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: '', component: ContentLayoutComponent, children:[
    // {path: '', redirectTo:'', pathMatch: 'full'},
    // {path: 'home',loadChildren:()=> import('./FeatureModules/Dashboard/').then(m =>m.DashboardModule)}
    { path: 'customer', loadChildren: () => import('./FeatureModules/Customer/Customer.Module').then(m => m.CustomerModule) }  
  ]},
  {path: '**', redirectTo: '/login', pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
