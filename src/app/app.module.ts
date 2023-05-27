import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {MatSelectModule} from '@angular/material/select'; 
import { AppComponent } from './app.component';
import { ModuleComponent } from './module/module.component';
import { AddMasterComponent } from './module/components/add-master/add-master.component';
import { AddDetailComponent } from './module/components/add-detail/add-detail.component';
import { ShowListComponent } from './module/components/show-list/show-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModuleComponent,
    AddMasterComponent,
    AddDetailComponent,
    ShowListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
