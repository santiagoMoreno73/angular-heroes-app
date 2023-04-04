import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroComponent } from './pages/hero/hero.component';
import { AddComponent } from './pages/add/add.component';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HomeComponent,
    ListComponent,
    HeroComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}
