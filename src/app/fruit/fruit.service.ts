import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Fruit } from './fruit';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FruitService {
  private baseUrl = 'http://localhost:3001/fruits';  

  constructor( private httpClient: HttpClient) {}

    getAll(){
      return this.httpClient.get<Fruit[]>('http://localhost:3001/fruits')
    }

    creat(data: Fruit){
      return this.httpClient.post('http://localhost:3001/fruits', data);
    }

    edit(id: number): Observable<Fruit> {
      return this.httpClient.get<Fruit>(`${this.baseUrl}/${id}`);
    }
  
    update(data: Fruit): Observable<Fruit> {
      return this.httpClient.put<Fruit>(`${this.baseUrl}/${data.id}`, data);
    }

    delete(id: number): Observable<void> {
      return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }
}

