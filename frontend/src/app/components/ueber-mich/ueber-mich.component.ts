import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../service/navigation.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ueber-mich',
  imports: [NgOptimizedImage],
  templateUrl: './ueber-mich.component.html',
  styleUrl: './ueber-mich.component.scss',
})
export class UeberMichComponent implements OnInit {
  constructor(private readonly navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.setSelectedTab('UNTERNEHMEN', 0);
  }

  getCurrentAge(): number {
    const birthDate = new Date(2002, 4, 18); // Month is 0-based: 4 = May
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const hasBirthdayPassedThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassedThisYear) {
      age--;
    }

    return age;
  }
}
