import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// interfaces
import { Hero } from '../interfaces/hero.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id_hero: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id_hero} `);
  }

  getSuggestions(term: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${term}&_limit=6`);
  }
}
