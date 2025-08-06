import { Component, OnInit } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NavigationService } from '../../service/navigation.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contact.component',
  imports: [ContactFormComponent, NgOptimizedImage],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  constructor(private readonly navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.setSelectedTab('KONTAKT');
  }
}
