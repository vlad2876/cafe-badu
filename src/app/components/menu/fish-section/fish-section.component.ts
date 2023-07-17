import {Component, OnInit} from '@angular/core';
import {BaseSectionComponent} from "../../../shared/base-section/base-section.component";
import {IDish} from "../../../interfaces/dish.interface";
import {BaseSectionService} from "../../../shared/base-section/base-section.service";

@Component({
  selector: 'app-fish-section',
  templateUrl: './fish-section.component.html',
  styleUrls: ['./fish-section.component.scss']
})
export class FishSectionComponent extends BaseSectionComponent implements OnInit {
  fishSectionDishes!: IDish[];

  constructor(private baseSectionService: BaseSectionService) {
    super();
  }

  ngOnInit() {
    this.fishSectionDishes = this.baseSectionService.getFishSectionDishes();
  }
}
