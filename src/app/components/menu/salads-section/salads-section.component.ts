import { Component } from '@angular/core';
import {IDish} from "../../../interfaces/dish.interface";

@Component({
  selector: 'app-salads-section',
  templateUrl: './salads-section.component.html',
  styleUrls: ['./salads-section.component.scss']
})
export class SaladsSectionComponent {
  private readonly imageUrl = 'assets/images';

  saladsSectionDishes: IDish[] = [
    {
      imagePath: `${this.imageUrl}/tomatoCucumber.jpg`,
      dishName: 'saladsSection.tomatoCucumber',
      price: 5
    }, {
      imagePath: `${this.imageUrl}/tomatoCucumberWalnuts.jpg`,
      dishName: 'saladsSection.tomatoCucumberWalnuts',
      price: 5
    }, {
      imagePath: `${this.imageUrl}/eggplant.jpg`,
      dishName: 'saladsSection.eggplant',
      price: 7
    }, {
      imagePath: `${this.imageUrl}/eggplantWalnuts.jpg`,
      dishName: 'saladsSection.eggplantWalnuts',
      price: 7
    }, {
      imagePath: `${this.imageUrl}/chicken.jpg`,
      dishName: 'saladsSection.chicken',
      price: 10
    }, {
      imagePath: `${this.imageUrl}/caesar.jpg`,
      dishName: 'saladsSection.caesar',
      price: 10
    }
  ];
}
