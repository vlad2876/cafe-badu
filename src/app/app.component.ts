import {Component, OnInit} from '@angular/core';
import {TranslationService} from "./shared/translation/translation.service";
import {IDish} from "./interfaces/dish.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private translationService: TranslationService) {
  }

  ngOnInit(): void {
    this.translationService.initializeTranslation();
  }

  changeLanguage(language: string): void {
    this.translationService.setLanguage(language);
  }
}
