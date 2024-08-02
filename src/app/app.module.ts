
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { FruitModule } from './fruit/fruit.module';
import { CreateComponent } from './fruit/create/create.component';
import { HomeComponent } from './fruit/home/home.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    FruitModule,
    CreateComponent,
    HomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[provideHttpClient()],
})
export class AppModule { }
