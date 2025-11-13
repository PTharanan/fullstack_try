import { Component, signal } from '@angular/core';
import { Postcom } from './postcom/postcom';

@Component({
  selector: 'app-root',
  imports: [Postcom],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-end');
}
