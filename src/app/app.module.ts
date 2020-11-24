import { BrowserModule } from '@angular/platform-browser';
/* Modules */
import { NgModule } from '@angular/core';
import { CoreModule } from './CoreModules/Core.modules';
import { AppRoutingModule } from './app-routing.module';

/* Components*/
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './ContentLayout/ContentLayout.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*Material Module */
import { MaterialModule } from './MaterialModule/Material/Material.module';
import { SharedModule } from './SharedModules/Shared.module';



@NgModule({
  declarations: [	
    AppComponent,
    ContentLayoutComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
