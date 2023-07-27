import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  readonly breakfastSectionBackgroundImage = 'assets/images/pancakes.jpg';
  readonly saladsSectionBackgroundImage = 'assets/images/tomatoCucumber.jpg';
  readonly soupSectionBackgroundImage = 'assets/images/kharcho.jpg';
  readonly doughSectionBackgroundImage = 'assets/images/adjarianKhachapuri.jpg';
  readonly hotDishesSectionBackgroundImage = 'assets/images/tabaka.jpg';
  readonly barbecueSectionBackgroundImage = 'assets/images/chickenBbq.jpg';
  readonly fishSectionBackgroundImage = 'assets/images/barabulka.jpg';
  readonly drinksSectionBackgroundImage = 'assets/images/coffee.jpg';
  readonly alcoholSectionBackgroundImage = 'assets/images/redWine.jpg';
}
