import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private baseUrl = environment.baseUrl;
    private user?: User;

    constructor(private http: HttpClient) { }

    get currentUser(): User | undefined {
        if (!this.user) return undefined;
        // deep clone 
        return structuredClone(this.user);
    }

    login(email: string, password: string): Observable<User> {
        const url = `${this.baseUrl}/users/1`;
        return this.http.get<User>(url).pipe(
            tap(user => this.user = user),
            tap(user => localStorage.setItem("token", "asrasar.123asdsa.23213ew")),
        );
    }

    checkAuthentication(): Observable<boolean> {
        if (!localStorage.getItem('token')) return of(false);

        const url = `${this.baseUrl}/users/1`;
        return this.http.get<User>(url).pipe(
            tap(user => this.user = user),
            map(user => !!user),
            catchError(error => of(false))
        )
    }


    logout(): void {
        this.user = undefined;
        localStorage.clear();
    }
}