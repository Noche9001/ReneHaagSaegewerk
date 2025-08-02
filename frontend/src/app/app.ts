import { Component } from '@angular/core';
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
})
export class App {
  protected title = 'Rene Haag Sägewerk';
}
