import { Component, OnInit } from '@angular/core';
import { Navbar } from '../general/navbar/navbar.component';
import { NavigationService } from '../../service/navigation.service';

@Component({
  selector: 'app-home',
  imports: [Navbar],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private readonly navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.setSelectedTab('HOME');
  }
}
