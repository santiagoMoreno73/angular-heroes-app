import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  term: string = '';
  heroes: Hero[] = [];
  heroSelected: Hero | undefined;

  constructor(private heroesService: HeroesService) {}

  search() {
    this.heroesService
      .getSuggestions(this.term.trim())
      .subscribe((data) => (this.heroes = data));
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.heroSelected = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.term = hero.superhero;

    this.heroesService
      .getHeroById(hero.id!)
      .subscribe((hero) => (this.heroSelected = hero));
  }
}
