import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';
import { FormsModule } from '@angular/forms';
import { EditComponent } from '../edit/edit.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    EditComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allfruits: Fruit[] = [];

  constructor(private fruitService: FruitService) {}

  ngOnInit(): void {
    this.fruitService.getAll().subscribe({
      next: (data) => {
        this.allfruits = data;
      },
      error: (err) => {
        console.error('Error fetching fruits:', err);
      }
    });
  }

  deleteItem(id: number): void {
    this.fruitService.delete(id).subscribe({
      next: () => {
        this.allfruits = this.allfruits.filter(fruit => fruit.id !== id);
      },
      error: (err: any) => {
        console.error('Error deleting fruit:', err);
      }
    });
  }
}
