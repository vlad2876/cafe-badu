import {Component, OnInit} from '@angular/core';
import {IDish} from "../../../interfaces/dish.interface";
import {BaseSectionComponent} from "../../../shared/base-section/base-section.component";
import {BaseSectionService} from "../../../shared/base-section/base-section.service";

@Component({
  selector: 'app-soup-section',
  templateUrl: './soup-section.component.html',
  styleUrls: ['./soup-section.component.scss']
})
export class SoupSectionComponent extends BaseSectionComponent implements OnInit {
  soupSectionDishes!: IDish[];

  constructor(private baseSectionService: BaseSectionService) {
    super();
  }

  ngOnInit() {
    this.soupSectionDishes = this.baseSectionService.getSoupSectionDishes();
  }
}
