import { Component } from '@angular/core';
import {IDish} from "../../interfaces/dish.interface";
import {TranslationService} from "../../shared/translation/translation.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  private readonly imageUrl = '../assets/images';

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

  constructor(private translationService: TranslationService) {
  }

  ngOnInit(): void {
    this.translationService.initializeTranslation();
  }

  changeLanguage(language: string): void {
    this.translationService.setLanguage(language);
  }
}
