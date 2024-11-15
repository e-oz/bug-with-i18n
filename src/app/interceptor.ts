import type { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthStore } from './auth.store';

let authService: AuthStore | undefined;

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  if (!authService) {
    authService = inject(AuthStore);
  }

  const authToken = authService.getToken();
  if (!authToken) {
    return next(req);
  }
  const newReq = req.clone({
    setHeaders: {
      'Authorization': `Bearer ${authToken}`,
    }
  });
  return next(newReq);
}
