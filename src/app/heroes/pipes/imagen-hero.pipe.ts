import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'imagenHero',
})
export class ImagenHeroPipe implements PipeTransform {
  transform(value: Hero): string {
    return `assets/heroes/${value.id}.jpg`;
  }
}
