import { Component } from '@angular/core';
import {TranslationService} from "../../shared/translation/translation.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private translationService: TranslationService) {
  }

  changeLanguage(language: string): void {
    this.translationService.setLanguage(language);
  }
}
