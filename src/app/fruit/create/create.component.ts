import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  constructor(private fruitService: FruitService, private router: Router){}
  formdata: Fruit ={
    id: 0,
    name: '',
    quantity: 0,
    price: 0

  }

  create(){
    this.fruitService.creat(this.formdata).subscribe({
      next: (data)=>{
        this.router.navigate(['/fruit/home']);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
