import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: "new-hero", component: AddPageComponent },
      { path: "search", component: SearchPageComponent },
      { path: "edit/:id", component: AddPageComponent },
      { path: "list", component: ListPageComponent },
      { path: ":id", component: HeroPageComponent },
      { path: "**", redirectTo: 'list' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule { }
