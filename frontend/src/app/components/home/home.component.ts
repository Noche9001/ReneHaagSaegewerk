import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../service/navigation.service';
import { NavbarComponent } from '../general/navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private readonly navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.setSelectedTab('HOME');
  }
}
