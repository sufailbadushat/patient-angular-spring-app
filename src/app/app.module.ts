import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { RouterModule, Routes } from '@angular/router';

let myRoute:Routes = 
[
  {
    path:"",
    component:AddPatientComponent
  },
  {
    path:"add",
    component:AddPatientComponent
  },
  {
    path:"view",
    component:ViewPatientComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddPatientComponent,
    ViewPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
