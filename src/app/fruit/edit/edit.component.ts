import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
deleteItem: any;
  constructor(
    private fruitService: FruitService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  formdata: Fruit = {
    name: '',
    quantity: 0,
    price: 0,
    id: 0
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = Number(param.get('id'));
      this.getByid(id);
    });
  }

  getByid(id: number): void {
    this.fruitService.edit(id).subscribe((data) => {
      this.formdata = data;
    });
  }

  update(){
    this.fruitService.update(this.formdata).subscribe({
      next:(data)=>{
        this.router.navigate(["/fruit/home"])
      },
      error: (er) =>{
        console.log(er)
      }
    })

  }
}
