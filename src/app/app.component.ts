import {Component, OnInit} from '@angular/core';
import {TranslationService} from "./shared/translation/translation.service";
import {IDish} from "./interfaces/dish.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private readonly imageUrl = '../../assets/images';

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
    }, {
      imagePath: `${this.imageUrl}/yogurt.jpg`,
      dishName: 'saladsSection.yogurt',
      price: 2
    }, {
      imagePath: `${this.imageUrl}/sourYogurt.jpeg`,
      dishName: 'saladsSection.sourYogurt',
      price: 3
    }, {
      imagePath: `${this.imageUrl}/suluguni.jpg`,
      dishName: 'saladsSection.suluguni',
      price: 9
    }, {
      imagePath: `${this.imageUrl}/imeretian.jpg`,
      dishName: 'saladsSection.imeretian',
      price: 8
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
