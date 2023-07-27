import {Component, OnInit} from '@angular/core';
import {BaseSectionComponent} from "../../../shared/base-section/base-section.component";
import {IDish} from "../../../interfaces/dish.interface";
import {BaseSectionService} from "../../../shared/base-section/base-section.service";

@Component({
  selector: 'app-drinks-section',
  templateUrl: './drinks-section.component.html',
  styleUrls: ['./drinks-section.component.scss']
})
export class DrinksSectionComponent extends BaseSectionComponent implements OnInit {
  drinksSectionDishes!: IDish[];

  constructor(private baseSectionService: BaseSectionService) {
    super();
  }

  ngOnInit() {
    this.drinksSectionDishes = this.baseSectionService.getDrinksSectionDishes();
  }
}
