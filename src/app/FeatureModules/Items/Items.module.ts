/* Core Modules*/ 
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddItemsComponent } from './Components/Items/AddItems/AddItems.component';
import { ItemsComponent } from './Components/Items/Items.component';
import { ItemsListComponent } from './Components/Items/ItemsList/ItemsList.component';
import { ItemsRouting } from './Items-routing.module';



@NgModule({
    declarations:[
        ItemsComponent,
        ItemsListComponent,
        AddItemsComponent
    ],
    imports:[
        ItemsRouting,
        CommonModule,
        RouterModule, 
        FormsModule,
        ReactiveFormsModule
    ],
    providers:[],
    bootstrap:[]
})
export class ItemsModule{

}