import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styles: [
    `
      .container-home {
        margin: 30px;
      }
    `,
  ],
})

export class HomePageComponent {
  constructor(private authService: AuthService, private router: Router) { }

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
