/*Core Modules*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Components*/ 
import { AddItemsComponent } from './Components/Items/AddItems/AddItems.component';
import { ItemsComponent } from './Components/Items/Items.component';
import { ItemsListComponent } from './Components/Items/ItemsList/ItemsList.component';


/*Routes*/ 
const routes: Routes = [
   { path:'', component:ItemsComponent,children:[
     { path:'', component:ItemsListComponent},
     { path:'AddItems', component:AddItemsComponent},
   ]},

  
  ];
@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItemsRouting{

}