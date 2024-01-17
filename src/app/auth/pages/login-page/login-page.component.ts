import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  constructor(public router: Router, private authService: AuthService,) { }

  onLogin(): void {
    this.authService.login("santimor2009@hotmail.com", "2323")
      .subscribe(res => {
        if (res) this.router.navigate(['/']);
      });
  }
}
