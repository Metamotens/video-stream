import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  return req.url.includes('/oauth2/token') ?
    next(req) :
    next(req.clone({
      setHeaders: {
        'Client-Id': `${environment.clientId}`,
        'Authorization': `Bearer ${token}`
      }
    }));
};
