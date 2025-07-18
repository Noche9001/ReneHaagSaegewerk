import { Component, HostListener, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { NavTab } from '../../../model/navigation.model';
import { NavigationService } from '../../../service/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [NgClass],
})
export class Navbar implements OnInit {
  isMenuOpen = false;
  navtabs?: NavTab[];

  constructor(private readonly navigationService: NavigationService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('#sideMenu') && !target.closest('#hamburger')) {
      this.isMenuOpen = false;
    }
  }

  ngOnInit() {
    this.navigationService.navtabs$.subscribe((navtabs) => {
      this.navtabs = navtabs;
    });
  }

  selectTab(tab: NavTab, subtabIndex?: number): void {
    if (!tab.submenus) {
      // Tab ohne Submenus
      this.navigationService.setSelectedTab(tab.title);
      this.isMenuOpen = false;
    } else if (subtabIndex != null) {
      // Subtab wurde gewählt
      this.navigationService.setSelectedTab(tab.title, subtabIndex);
      this.isMenuOpen = false;
    } else {
      // Navtab mit subtabs aufklappen
      // Alle anderen einklappen
      for (let tabInList of this.navtabs!) {
        tabInList.expanded = false;
      }
      // Gewählten Tab aufklappen
      tab.expanded = true;
    }
  }
}
