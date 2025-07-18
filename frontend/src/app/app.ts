import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [HomeComponent],
})
export class App {
  protected title = 'Rene Haag Sägewerk';
}
