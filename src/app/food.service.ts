import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Food {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) { }

  getFoods(): Observable<Food[]> {
    return this.httpClient.get<Food[]>("http://localhost:5000/foods");
  }
}
