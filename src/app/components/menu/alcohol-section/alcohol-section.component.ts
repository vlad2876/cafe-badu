import {Component, OnInit} from '@angular/core';
import {BaseSectionComponent} from "../../../shared/base-section/base-section.component";
import {IDish} from "../../../interfaces/dish.interface";
import {BaseSectionService} from "../../../shared/base-section/base-section.service";

@Component({
  selector: 'app-alcohol-section',
  templateUrl: './alcohol-section.component.html',
  styleUrls: ['./alcohol-section.component.scss']
})
export class AlcoholSectionComponent extends BaseSectionComponent implements OnInit {
  alcoholSectionDishes!: IDish[];

  constructor(private baseSectionService: BaseSectionService) {
    super();
  }

  ngOnInit() {
    this.alcoholSectionDishes = this.baseSectionService.getAlcoholSectionDishes();
  }
}
