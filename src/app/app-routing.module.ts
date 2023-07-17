import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from "./components/menu/menu.component";
import {SaladsSectionComponent} from "./components/menu/salads-section/salads-section.component";
import {SoupSectionComponent} from "./components/menu/soup-section/soup-section.component";
import {DoughSectionComponent} from "./components/menu/dough-section/dough-section.component";
import {HotDishesSectionComponent} from "./components/menu/hot-dishes-section/hot-dishes-section.component";
import {BarbecueSectionComponent} from "./components/menu/barbecue-section/barbecue-section.component";
import {FishSectionComponent} from "./components/menu/fish-section/fish-section.component";
import {AlcoholSectionComponent} from "./components/menu/alcohol-section/alcohol-section.component";

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'menu/salads', component: SaladsSectionComponent},
  {path: 'menu/soup', component: SoupSectionComponent},
  {path: 'menu/dough', component: DoughSectionComponent},
  {path: 'menu/hot-dishes', component: HotDishesSectionComponent},
  {path: 'menu/barbecue', component: BarbecueSectionComponent},
  {path: 'menu/fish', component: FishSectionComponent},
  {path: 'menu/alcohol', component: AlcoholSectionComponent},
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
  {path: '**', redirectTo: 'menu'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
