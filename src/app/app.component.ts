import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly store = inject(Store);
}
