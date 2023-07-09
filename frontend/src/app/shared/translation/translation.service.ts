import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private translate: TranslateService) { }

  initializeTranslation(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  setLanguage(language: string): void {
    this.translate.use(language);
  }
}
