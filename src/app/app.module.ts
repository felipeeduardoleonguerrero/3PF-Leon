import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { StudentsModule } from './sidenav/sidenav.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    StudentsModule,
    CoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
