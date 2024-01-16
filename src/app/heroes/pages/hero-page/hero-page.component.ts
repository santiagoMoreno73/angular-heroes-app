import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// rxjs
import { switchMap, tap } from 'rxjs';
// service
import { HeroesService } from '../../services/heroes.service';
// interface
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }

      h1 {
        margin-bottom: 0px;
      }
    `,
  ],
})
export class HeroPageComponent implements OnInit {
  hero!: Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceHero: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.serviceHero.getHeroById(id))
      )
      .subscribe((hero) => {
        return hero ?
          this.hero = hero :
          this.router.navigate(['/heroes/list']);
      });
  }

  goBack() {
    this.router.navigateByUrl('hero/list');
  }
}
