/*Core Modules*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from './Components/Invoices/Invoices.component';

/*Components*/ 



/*Routes*/ 
const routes: Routes = [
  {path:'',component:InvoicesComponent}

  
  ];
@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InvoicesRouting{

}