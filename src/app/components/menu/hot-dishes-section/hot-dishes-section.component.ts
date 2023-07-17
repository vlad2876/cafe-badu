import {Component, OnInit} from '@angular/core';
import {BaseSectionComponent} from "../../../shared/base-section/base-section.component";
import {IDish} from "../../../interfaces/dish.interface";
import {BaseSectionService} from "../../../shared/base-section/base-section.service";

@Component({
  selector: 'app-hot-dishes-section',
  templateUrl: './hot-dishes-section.component.html',
  styleUrls: ['./hot-dishes-section.component.scss']
})
export class HotDishesSectionComponent extends BaseSectionComponent implements OnInit {
  hotSectionDishes!: IDish[];

  constructor(private baseSectionService: BaseSectionService) {
    super();
  }

  ngOnInit() {
    this.hotSectionDishes = this.baseSectionService.getHotSectionDishes();
  }
}
