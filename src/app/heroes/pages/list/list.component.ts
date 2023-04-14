import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroesServices: HeroesService) {}

  ngOnInit(): void {
    this.heroesServices
      .getHeroes()
      .subscribe((resp) => (this.heroes = [...resp]));
  }
}
