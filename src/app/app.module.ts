import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarJrmbComponent } from './components/navbar-jrmb/navbar-jrmb.component';
import { TareasJrmbComponent } from './components/tareas-jrmb/tareas-jrmb.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarJrmbComponent,
    TareasJrmbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
