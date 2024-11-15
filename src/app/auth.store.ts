import { afterNextRender, computed, inject, Injectable, Injector, signal, untracked } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private readonly injector = inject(Injector);
  private readonly $token = signal<string | undefined>(undefined);

  public readonly $userId = computed(() => {
    const token = this.$token();
    if (!token) {
      return undefined;
    }
    return 1;
  });

  constructor() {
    this.whenReady(() => this.$token.set('12121212'));
  }

  getToken() {
    return untracked(this.$token);
  }

  whenReady(cb: Function) {
    if (typeof window !== 'undefined') {
      cb();
    } else {
      afterNextRender(() => {
        cb();
      }, { injector: this.injector });
    }
  }
}


