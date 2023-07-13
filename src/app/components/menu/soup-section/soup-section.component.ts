import { Component } from '@angular/core';
import {IDish} from "../../../interfaces/dish.interface";

@Component({
  selector: 'app-soup-section',
  templateUrl: './soup-section.component.html',
  styleUrls: ['./soup-section.component.scss']
})
export class SoupSectionComponent {
  private readonly imageUrl = 'assets/images';

  soupSectionDishes: IDish[] = [
    {
      imagePath: `${this.imageUrl}/vegetable.jpg`,
      dishName: 'soupSection.vegetable',
      price: 4
    }, {
      imagePath: `${this.imageUrl}/chickenSoup.jpg`,
      dishName: 'soupSection.chicken',
      price: 6
    }, {
      imagePath: `${this.imageUrl}/okroshka.jpg`,
      dishName: 'soupSection.okroshka',
      price: 8
    }, {
      imagePath: `${this.imageUrl}/gupta.jpg`,
      dishName: 'soupSection.gupta',
      price: 6
    }, {
      imagePath: `${this.imageUrl}/kharcho.jpg`,
      dishName: 'soupSection.kharcho',
      price: 8
    }
  ];
}
