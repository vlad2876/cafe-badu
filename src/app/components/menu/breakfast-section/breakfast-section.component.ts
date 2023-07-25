import {Component, OnInit} from '@angular/core';
import {BaseSectionComponent} from "../../../shared/base-section/base-section.component";
import {IDish} from "../../../interfaces/dish.interface";
import {BaseSectionService} from "../../../shared/base-section/base-section.service";

@Component({
  selector: 'app-breakfast-section',
  templateUrl: './breakfast-section.component.html',
  styleUrls: ['./breakfast-section.component.scss']
})
export class BreakfastSectionComponent extends BaseSectionComponent implements OnInit {
  breakfastSectionDishes!: IDish[];

  constructor(private baseSectionService: BaseSectionService) {
    super();
  }

  ngOnInit() {
    this.breakfastSectionDishes = this.baseSectionService.getBreakfastSectionDishes();
  }
}
