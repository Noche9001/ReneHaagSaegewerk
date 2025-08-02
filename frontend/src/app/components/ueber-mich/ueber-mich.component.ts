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
}
