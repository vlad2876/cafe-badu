import {Component, OnInit} from '@angular/core';
import {IDish} from "../../../interfaces/dish.interface";
import {BaseSectionComponent} from "../../../shared/base-section/base-section.component";
import {BaseSectionService} from "../../../shared/base-section/base-section.service";

@Component({
  selector: 'app-salads-section',
  templateUrl: './salads-section.component.html',
  styleUrls: ['./salads-section.component.scss']
})
export class SaladsSectionComponent extends BaseSectionComponent implements OnInit {
  saladsSectionDishes!: IDish[];

  constructor(private baseSectionService: BaseSectionService) {
    super();
  }

  ngOnInit() {
    this.saladsSectionDishes = this.baseSectionService.getSaladsSectionDishes();
  }
}
