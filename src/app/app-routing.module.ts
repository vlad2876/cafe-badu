import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from "./components/menu/menu.component";
import {SaladsSectionComponent} from "./components/menu/salads-section/salads-section.component";
import {SoupSectionComponent} from "./components/menu/soup-section/soup-section.component";
import {DoughSectionComponent} from "./components/menu/dough-section/dough-section.component";
import {HotDishesSectionComponent} from "./components/menu/hot-dishes-section/hot-dishes-section.component";

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'menu/salads', component: SaladsSectionComponent},
  {path: 'menu/soup', component: SoupSectionComponent},
  {path: 'menu/dough', component: DoughSectionComponent},
  {path: 'menu/hot-dishes', component: HotDishesSectionComponent},
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
  {path: '**', redirectTo: 'menu'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
