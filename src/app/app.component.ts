import { CommonModule } from '@angular/common';
import { Component, createComponent } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { CreateComponent } from './fruit/create/create.component';
import { HomeComponent } from './fruit/home/home.component';
import { EditComponent } from './fruit/edit/edit.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    CreateComponent,
    EditComponent
  ]
})
export class AppComponent {
  constructor(private router: Router) {}

  navigateToCreate() {
    this.router.navigate(['/fruit/create']);
  }
}
