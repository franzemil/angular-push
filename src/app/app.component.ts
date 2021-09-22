import { Component, OnInit } from '@angular/core';
import { Food, FoodService } from './food.service';
import { UpdateManagerService } from './update-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  version = "5";
  foods: Food[] = [];

  newVersionAvailable = false;

  constructor(private foodService: FoodService, private updateManagerService: UpdateManagerService) {
  }

  ngOnInit(): void {
    this.foodService.getFoods().subscribe(foods => this.foods = foods);
    this.updateManagerService.updates.subscribe(() => this.newVersionAvailable = true);
  }

  updateToNewVersion() {
    this.updateManagerService.update().subscribe(() => {
      window.location.reload();
    });
  }
}
