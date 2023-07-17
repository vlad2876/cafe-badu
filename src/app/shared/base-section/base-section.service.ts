import { Injectable } from '@angular/core';
import { IDish } from '../../interfaces/dish.interface';

@Injectable({
  providedIn: 'root'
})
export class BaseSectionService {
  private readonly baseImagePath = 'assets/images';

  getDoughSectionDishes(): IDish[] {
    return [
      {
        imagePath: `${this.baseImagePath}/bread.jpg`,
        dishName: 'doughSection.bread',
        price: 2
      }, {
        imagePath: `${this.baseImagePath}/mchadi.jpg`,
        dishName: 'doughSection.mchadi',
        price: 3
      }, {
        imagePath: `${this.baseImagePath}/chvishtar.jpg`,
        dishName: 'doughSection.chvishtar',
        price: 5
      }, {
        imagePath: `${this.baseImagePath}/adjarianKhachapuri.jpg`,
        dishName: 'doughSection.adjarianKhachapuri',
        price: 12
      }, {
        imagePath: `${this.baseImagePath}/imeretianKhachapuri.jpg`,
        dishName: 'doughSection.imeretianKhachapuri',
        price: 15
      }, {
        imagePath: `${this.baseImagePath}/megrelianKhachapuri.jpg`,
        dishName: 'doughSection.megrelianKhachapuri',
        price: 16
      }
    ];
  }

  getSaladsSectionDishes(): IDish[] {
    return [
      {
        imagePath: `${this.baseImagePath}/tomatoCucumber.jpg`,
        dishName: 'saladsSection.tomatoCucumber',
        price: 5
      }, {
        imagePath: `${this.baseImagePath}/tomatoCucumberWalnuts.jpg`,
        dishName: 'saladsSection.tomatoCucumberWalnuts',
        price: 5
      }, {
        imagePath: `${this.baseImagePath}/eggplant.jpg`,
        dishName: 'saladsSection.eggplant',
        price: 7
      }, {
        imagePath: `${this.baseImagePath}/eggplantWalnuts.jpg`,
        dishName: 'saladsSection.eggplantWalnuts',
        price: 7
      }, {
        imagePath: `${this.baseImagePath}/chicken.jpg`,
        dishName: 'saladsSection.chicken',
        price: 10
      }, {
        imagePath: `${this.baseImagePath}/caesar.jpg`,
        dishName: 'saladsSection.caesar',
        price: 10
      }
    ];
  }

  getSoupSectionDishes(): IDish[] {
    return [
      {
        imagePath: `${this.baseImagePath}/vegetable.jpg`,
        dishName: 'soupSection.vegetable',
        price: 4
      }, {
        imagePath: `${this.baseImagePath}/chickenSoup.jpg`,
        dishName: 'soupSection.chicken',
        price: 6
      }, {
        imagePath: `${this.baseImagePath}/gupta.jpg`,
        dishName: 'soupSection.gupta',
        price: 6
      }, {
        imagePath: `${this.baseImagePath}/kharcho.jpg`,
        dishName: 'soupSection.kharcho',
        price: 8
      }
    ];
  }

  getHotSectionDishes(): IDish[] {
    return [
      {
        imagePath: `${this.baseImagePath}/chashushuli.jpg`,
        dishName: 'hotDishesSection.chashushuli',
        price: 4
      }, {
        imagePath: `${this.baseImagePath}/ostri.jpg`,
        dishName: 'hotDishesSection.ostri',
        price: 6
      }, {
        imagePath: `${this.baseImagePath}/ojakhuri.jpg`,
        dishName: 'hotDishesSection.ojakhuri',
        price: 6
      }, {
        imagePath: `${this.baseImagePath}/chakhokhbili.jpg`,
        dishName: 'hotDishesSection.chakhokhbili',
        price: 8
      }, {
        imagePath: `${this.baseImagePath}/beans.jpg`,
        dishName: 'hotDishesSection.beans',
        price: 8
      }, {
        imagePath: `${this.baseImagePath}/chickenKiev.jpg`,
        dishName: 'hotDishesSection.chickenKiev',
        price: 8
      }, {
        imagePath: `${this.baseImagePath}/dumplings.jpg`,
        dishName: 'hotDishesSection.dumplings',
        price: 8
      }, {
        imagePath: `${this.baseImagePath}/ajapsandal.jpg`,
        dishName: 'hotDishesSection.ajapsandal',
        price: 8
      }, {
        imagePath: `${this.baseImagePath}/tabaka.jpg`,
        dishName: 'hotDishesSection.tabaka',
        price: 8
      }, {
        imagePath: `${this.baseImagePath}/chkmeruli.jpg`,
        dishName: 'hotDishesSection.chkmeruli',
        price: 8
      }, {
        imagePath: `${this.baseImagePath}/frenchFries.jpg`,
        dishName: 'hotDishesSection.frenchFries',
        price: 8
      }, {
        imagePath: `${this.baseImagePath}/friedSulguni.jpg`,
        dishName: 'hotDishesSection.friedSulguni',
        price: 8
      }
    ];
  }
}
