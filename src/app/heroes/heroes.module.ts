import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroComponent } from './pages/hero/hero.component';
import { AddComponent } from './pages/add/add.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { ImagenHeroPipe } from './pipes/imagen-hero.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HomeComponent,
    ListComponent,
    HeroComponent,
    HeroCardComponent,
    ImagenHeroPipe,
  ],
  imports: [CommonModule, FormsModule, HeroesRoutingModule, MaterialModule],
})
export class HeroesModule {}
