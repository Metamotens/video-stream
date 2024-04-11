import { Injectable, effect, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthRequest } from '../models/auth-request'
import { AuthResponse } from '../models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = signal('');

  constructor(private http: HttpClient) {
    effect(() => {
      this.token() && console.info('token received:', this.token());
    });
  }

  auth(): Promise<AuthResponse> {
    return lastValueFrom(this.http.post<AuthResponse>(`${environment.authUrl}/oauth2/token`, {
      client_id: environment.clientId,
      client_secret: environment.clientSecret,
      grant_type: environment.grantType
    } as AuthRequest).pipe(tap(res => this.token.set(res.access_token))));
  }

  getToken(): string {
    return this.token();
  }
}
