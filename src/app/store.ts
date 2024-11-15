import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class Store {
  private readonly http = inject(HttpClient);
  private readonly authStore = inject(AuthStore);
  public readonly $isAuthenticated = this.authStore.$userId;

  constructor() {
    this.http.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/1').subscribe();
  }
}