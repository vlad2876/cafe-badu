import {NgModule} from '@angular/core';
import {BrowserModule, DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslationModule} from "./shared/translation/translation.module";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {AppRoutingModule} from "./app-routing.module";
import { MenuComponent } from './components/menu/menu.component';
import { SaladsSectionComponent } from './components/menu/salads-section/salads-section.component';
import { SoupSectionComponent } from './components/menu/soup-section/soup-section.component';
import { DoughSectionComponent } from './components/menu/dough-section/dough-section.component';
import { HeaderComponent } from './components/header/header.component';
import { HotDishesSectionComponent } from './components/menu/hot-dishes-section/hot-dishes-section.component';
import { BarbecueSectionComponent } from './components/menu/barbecue-section/barbecue-section.component';
import { FishSectionComponent } from './components/menu/fish-section/fish-section.component';
import { AlcoholSectionComponent } from './components/menu/alcohol-section/alcohol-section.component';
import { BreakfastSectionComponent } from './components/menu/breakfast-section/breakfast-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SaladsSectionComponent,
    SoupSectionComponent,
    DoughSectionComponent,
    HeaderComponent,
    HotDishesSectionComponent,
    BarbecueSectionComponent,
    FishSectionComponent,
    AlcoholSectionComponent,
    BreakfastSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TranslationModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private readonly iconsPath: string = "assets/icons";

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('en', this.setPath(`${this.iconsPath}/en.svg`));
    matIconRegistry.addSvgIcon('ru', this.setPath(`${this.iconsPath}/ru.svg`));
    matIconRegistry.addSvgIcon('ge', this.setPath(`${this.iconsPath}/ge.svg`));
  }

  private setPath(path: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(path);
  }
}
