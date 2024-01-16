import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// interfaces
import { Hero } from '../interfaces/hero.interface';
import { Observable, catchError, map, of, pipe } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id_hero: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id_hero}`);
  }

  getSuggestions(term: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${term}&_limit=6`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw Error("Hero id is required");
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }

  deleteHeroById(hero: Hero): Observable<boolean> {
    if (!hero) throw Error("Hero id is required");

    return this.http.delete(`${this.baseUrl}/heroes/${hero.id}`)
      .pipe(
        map(resp => true),
        catchError(error => of(false)),
      );
  }
}
