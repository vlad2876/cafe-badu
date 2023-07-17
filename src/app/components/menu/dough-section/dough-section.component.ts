import {Component, OnInit} from '@angular/core';
import {IDish} from "../../../interfaces/dish.interface";
import {BaseSectionComponent} from "../../../shared/base-section/base-section.component";
import {BaseSectionService} from "../../../shared/base-section/base-section.service";

@Component({
  selector: 'app-dough-section',
  templateUrl: './dough-section.component.html',
  styleUrls: ['./dough-section.component.scss']
})
export class DoughSectionComponent extends BaseSectionComponent implements OnInit {
  doughSectionDishes!: IDish[];

  constructor(private baseSectionService: BaseSectionService) {
    super();
  }

  ngOnInit() {
    this.doughSectionDishes = this.baseSectionService.getDoughSectionDishes();
  }
}
