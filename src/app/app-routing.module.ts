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
  { path: 'customer', loadChildren: () => import('./FeatureModules/Customer/Customer.Module').then(m => m.CustomerModule) },
  { path: 'jobs',loadChildren:()=> import('./FeatureModules/Jobs/Jobs.module').then(m =>m.JobsModule)},
  { path: 'items',loadChildren:()=> import('./FeatureModules/Items/Items.module').then(m =>m.ItemsModule)},
  { path: 'invoices',loadChildren:()=> import('./FeatureModules/Invoices/Invoices.module').then(m =>m.InvoicesModule)},
  { path: 'payments',loadChildren:()=> import('./FeatureModules/Payments/Payments.module').then(m =>m.PaymentsModule)},
  { path: 'reports',loadChildren:()=> import('./FeatureModules/Reports/Reports.module').then(m =>m.ReportsModule)},
  { path: 'main',loadChildren:()=> import('./FeatureModules/Maintenance/Maintenance.module').then(m =>m.MaintenanceModule)},
  ]},
  {path: '**', redirectTo: '/login', pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
