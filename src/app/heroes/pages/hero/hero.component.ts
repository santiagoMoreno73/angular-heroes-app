import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// rxjs
import { switchMap, tap } from 'rxjs';
// service
import { HeroesService } from '../../services/heroes.service';
// interface
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {
  hero!: Hero;

  constructor(
    private route: ActivatedRoute,
    private serviceHero: HeroesService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(({ id }) => this.serviceHero.getHeroById(id)),
        tap(console.log)
      )
      .subscribe((hero) => (this.hero = hero));
  }
}
