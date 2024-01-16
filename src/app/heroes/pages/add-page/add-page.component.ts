import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { filter, switchMap } from 'rxjs';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
})
export class AddPageComponent implements OnInit {
  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  publishers = [
    { id: "DC Comics", value: "DC - Comics" },
    { id: "Marvel", value: "Marvel - Comics" }
  ];

  constructor(
    private heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroService.getHeroById(id)),
      ).subscribe((hero: Hero) => {
        return hero ? this.heroForm.reset(hero) : this.router.navigateByUrl("/");
      })
  }

  onSubmit() {
    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.updateHero();
    } else {
      this.createHero();
    }

    return;
  }

  private updateHero() {
    this.heroService.updateHero(this.currentHero).subscribe((hero: Hero) => {
      if (!hero) return;
      // TODO: load snack
      this.showSnackBar(`${hero.superhero} updated!`);
    });
  }

  private createHero() {
    this.heroService.addHero(this.currentHero).subscribe((hero: Hero) => {
      if (!hero) return;
      // TODO: view hero
      this.router.navigate(['/heroes/edit', hero.id]);
      this.showSnackBar(`${hero.superhero} created!`);
    });
  }

  private showSnackBar(message: string) {
    this.snackbar.open(message, 'Done', {
      duration: 2500
    })
  }

  onDelete() {
    if (!this.currentHero.id) throw Error('Hero id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    });

    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => this.heroService.deleteHeroById(this.currentHero)),
        filter((wasDeleted: boolean) => wasDeleted),
      )
      .subscribe(() => {
        this.router.navigate(['/heroes']);
      });
  }
}
