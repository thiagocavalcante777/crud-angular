import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { CriarComponentComponent } from './criar-component/criar-component.component';
import { ListarComponentComponent } from './listar-component/listar-component.component';
import { EditarComponentComponent } from './editar-component/editar-component.component';
import {AppRoutes} from "./app.routes";
import { XyzComponent } from './xyz/xyz.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CriarComponentComponent,
    ListarComponentComponent,
    EditarComponentComponent,
    XyzComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
