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
        price: 15
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
        price: 6
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
        price: 8
      }, {
        imagePath: `${this.baseImagePath}/caesar.jpg`,
        dishName: 'saladsSection.caesar',
        price: 15
      }
    ];
  }

  getBreakfastSectionDishes(): IDish[] {
    return [
      {
        imagePath: `${this.baseImagePath}/pancakes.jpg`,
        dishName: 'breakfastSection.pancakes',
        price: 6
      }, {
        imagePath: `${this.baseImagePath}/chishiBishi.jpg`,
        dishName: 'breakfastSection.chishiBishi',
        price: 5
      }, {
        imagePath: `${this.baseImagePath}/rice.jpg`,
        dishName: 'breakfastSection.rice',
        price: 5
      }, {
        imagePath: `${this.baseImagePath}/oatmeal.jpg`,
        dishName: 'breakfastSection.oatmeal',
        price: 5
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
        price: 13
      }, {
        imagePath: `${this.baseImagePath}/ostri.jpg`,
        dishName: 'hotDishesSection.ostri',
        price: 13
      }, {
        imagePath: `${this.baseImagePath}/ojakhuri.jpg`,
        dishName: 'hotDishesSection.ojakhuri',
        price: 12
      }, {
        imagePath: `${this.baseImagePath}/chakhokhbili.jpg`,
        dishName: 'hotDishesSection.chakhokhbili',
        price: 12
      }, {
        imagePath: `${this.baseImagePath}/beans.jpg`,
        dishName: 'hotDishesSection.beans',
        price: 8
      }, {
        imagePath: `${this.baseImagePath}/chickenKiev.jpg`,
        dishName: 'hotDishesSection.chickenKiev',
        price: 12
      }, {
        imagePath: `${this.baseImagePath}/dumplings.jpg`,
        dishName: 'hotDishesSection.dumplings',
        price: 10
      }, {
        imagePath: `${this.baseImagePath}/ajapsandal.jpg`,
        dishName: 'hotDishesSection.ajapsandal',
        price: 7
      }, {
        imagePath: `${this.baseImagePath}/tabaka.jpg`,
        dishName: 'hotDishesSection.tabaka',
        price: 20
      }, {
        imagePath: `${this.baseImagePath}/chkmeruli.jpg`,
        dishName: 'hotDishesSection.chkmeruli',
        price: 25
      }, {
        imagePath: `${this.baseImagePath}/frenchFries.jpg`,
        dishName: 'hotDishesSection.frenchFries',
        price: 5
      }, {
        imagePath: `${this.baseImagePath}/friedSulguni.jpg`,
        dishName: 'hotDishesSection.friedSulguni',
        price: 10
      }
    ];
  }

  getBarbecueSectionDishes(): IDish[] {
    return [
      {
        imagePath: `${this.baseImagePath}/porkBbq.jpg`,
        dishName: 'barbecueSection.porkBbq',
        price: 15
      }, {
        imagePath: `${this.baseImagePath}/chickenBbq.jpg`,
        dishName: 'barbecueSection.chickenBbq',
        price: 12
      }, {
        imagePath: `${this.baseImagePath}/grilledVegetables.jpg`,
        dishName: 'barbecueSection.grilledVegetables',
        price: 10
      }
    ];
  }

  getFishSectionDishes(): IDish[] {
    return [
      {
        imagePath: `${this.baseImagePath}/troutSideDish.jpg`,
        dishName: 'fishSection.troutSideDish',
        price: 15
      }, {
        imagePath: `${this.baseImagePath}/troutLemonJuice.jpg`,
        dishName: 'fishSection.troutLemonJuice',
        price: 15
      }, {
        imagePath: `${this.baseImagePath}/friedTrout.jpg`,
        dishName: 'fishSection.friedTrout',
        price: 12
      }, {
        imagePath: `${this.baseImagePath}/barabulka.jpg`,
        dishName: 'fishSection.barabulka',
        price: 12
      }, {
        imagePath: `${this.baseImagePath}/mullet.jpg`,
        dishName: 'fishSection.mullet',
        price: 12
      }
    ];
  }

  getDrinksSectionDishes(): IDish[] {
    return [
      {
        imagePath: `${this.baseImagePath}/tea.jpg`,
        dishName: 'drinksSection.tea',
        price: 2
      }, {
        imagePath: `${this.baseImagePath}/coffee.jpg`,
        dishName: 'drinksSection.coffee',
        price: 2
      }, {
        imagePath: `${this.baseImagePath}/lemonade.jpg`,
        dishName: 'drinksSection.lemonade',
        price: 3
      }, {
        imagePath: `${this.baseImagePath}/waterSm.jpg`,
        dishName: 'drinksSection.waterSm',
        price: 2
      }, {
        imagePath: `${this.baseImagePath}/waterLg.jpg`,
        dishName: 'drinksSection.waterLg',
        price: 3
      }, {
        imagePath: `${this.baseImagePath}/nabeghlaviSm.jpg`,
        dishName: 'drinksSection.nabeghlaviSm',
        price: 2
      }, {
        imagePath: `${this.baseImagePath}/nabeghlaviLg.jpg`,
        dishName: 'drinksSection.nabeghlaviLg',
        price: 3
      }, {
        imagePath: `${this.baseImagePath}/naturalJuice.jpg`,
        dishName: 'drinksSection.naturalJuice',
        price: 7
      }, {
        imagePath: `${this.baseImagePath}/compoteSm.jpg`,
        dishName: 'drinksSection.compoteSm',
        price: 2
      }, {
        imagePath: `${this.baseImagePath}/compoteLg.jpg`,
        dishName: 'drinksSection.compoteLg',
        price: 7
      }
    ];
  }

  getAlcoholSectionDishes(): IDish[] {
    return [
      {
        imagePath: `${this.baseImagePath}/redWine.jpg`,
        dishName: 'alcoholSection.redWine',
        price: 5
      }, {
        imagePath: `${this.baseImagePath}/whiteWine.jpg`,
        dishName: 'alcoholSection.whiteWine',
        price: 5
      }, {
        imagePath: `${this.baseImagePath}/chaChaSm.jpg`,
        dishName: 'alcoholSection.chaChaSm',
        price: 2
      }, {
        imagePath: `${this.baseImagePath}/chaChaLg.jpg`,
        dishName: 'alcoholSection.chaChaLg',
        price: 20
      }, {
        imagePath: `${this.baseImagePath}/cognacSm.jpg`,
        dishName: 'alcoholSection.cognacSm',
        price: 3
      }, {
        imagePath: `${this.baseImagePath}/cognacLg.jpg`,
        dishName: 'alcoholSection.cognacLg',
        price: 30
      }, {
        imagePath: `${this.baseImagePath}/argo.jpg`,
        dishName: 'alcoholSection.argo',
        price: 5
      }, {
        imagePath: `${this.baseImagePath}/herzog.jpg`,
        dishName: 'alcoholSection.herzog',
        price: 5
      }
    ];
  }
}
