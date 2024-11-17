import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  public readonly $token = signal<string | undefined>(undefined);
  private readonly platform = inject(PLATFORM_ID);


  constructor() {
    if (isPlatformBrowser(this.platform)) {
      this.$token.set('12121212');
    }
  }
}


