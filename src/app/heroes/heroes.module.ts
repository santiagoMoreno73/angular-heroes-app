import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { HeroImagePipe } from "./pipes/hero-image.pipe";

@NgModule({
  declarations: [
    AddPageComponent,
    SearchPageComponent,
    HomePageComponent,
    ListPageComponent,
    HeroPageComponent,
    HeroCardComponent,
    HeroImagePipe,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeroesRoutingModule,
    MaterialModule],
})
export class HeroesModule { }
