import {Component, OnInit} from '@angular/core';
import {BaseSectionComponent} from "../../../shared/base-section/base-section.component";
import {IDish} from "../../../interfaces/dish.interface";
import {BaseSectionService} from "../../../shared/base-section/base-section.service";

@Component({
  selector: 'app-barbecue-section',
  templateUrl: './barbecue-section.component.html',
  styleUrls: ['./barbecue-section.component.scss']
})
export class BarbecueSectionComponent extends BaseSectionComponent implements OnInit {
  barbecueSectionDishes!: IDish[];

  constructor(private baseSectionService: BaseSectionService) {
    super();
  }

  ngOnInit() {
    this.barbecueSectionDishes = this.baseSectionService.getBarbecueSectionDishes();
  }
}
