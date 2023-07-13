import { Component } from '@angular/core';
import {IDish} from "../../../interfaces/dish.interface";

@Component({
  selector: 'app-dough-section',
  templateUrl: './dough-section.component.html',
  styleUrls: ['./dough-section.component.scss']
})
export class DoughSectionComponent {
  private readonly imageUrl = 'assets/images';

  doughSectionDishes: IDish[] = [
    {
      imagePath: `${this.imageUrl}/bread.jpg`,
      dishName: 'doughSection.bread',
      price: 2
    }, {
      imagePath: `${this.imageUrl}/mchadi.jpg`,
      dishName: 'doughSection.mchadi',
      price: 3
    }, {
      imagePath: `${this.imageUrl}/chvishtar.jpg`,
      dishName: 'doughSection.chvishtar',
      price: 5
    }, {
      imagePath: `${this.imageUrl}/adjarianKhachapuri.jpg`,
      dishName: 'doughSection.adjarianKhachapuri',
      price: 12
    }, {
      imagePath: `${this.imageUrl}/imeretianKhachapuri.jpg`,
      dishName: 'doughSection.imeretianKhachapuri',
      price: 15
    }, {
      imagePath: `${this.imageUrl}/megrelianKhachapuri.jpg`,
      dishName: 'doughSection.megrelianKhachapuri',
      price: 16
    }
  ];
}
