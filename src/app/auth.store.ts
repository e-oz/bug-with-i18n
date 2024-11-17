import { isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID, signal, untracked } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private readonly $token = signal<string | undefined>(undefined);
  private readonly platform = inject(PLATFORM_ID);

  public readonly $userId = computed(() => {
    const token = this.$token();
    if (!token) {
      return undefined;
    }
    return 1;
  });

  constructor() {
    if (isPlatformBrowser(this.platform)) {
      this.$token.set('12121212');
    }
  }

  getToken() {
    return untracked(this.$token);
  }
}


