import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AuthStore } from './auth.store';

@Component({
  selector: 'app-root',
  template: `
    <span>Cat is:</span>
    @if ($isAuthenticated()) {
      <span>Alive</span>
    } @else {
      <span>Dead</span>
    }
  `,
  styles: `:host {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-family: monospace
  }`
})
export class AppComponent {
  private readonly http = inject(HttpClient);
  private readonly authStore = inject(AuthStore);
  public readonly $isAuthenticated = this.authStore.$token;

  constructor() {
    // if this request fails, we get a deadlock.
    this.http.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + Math.floor(Math.random() * 1000)).subscribe();
  }
}
