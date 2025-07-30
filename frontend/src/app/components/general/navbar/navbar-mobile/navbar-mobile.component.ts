import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { NavTab } from '../../../../model/navigation.model';
import { NavTabSelectedEvent } from '../navbar.component';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss'],
  imports: [NgClass],
})
export class NavbarMobileComponent {
  @Output()
  tabSelected = new EventEmitter<NavTabSelectedEvent>();

  @Input()
  navtabs: NavTab[] | null = [];

  isMenuOpen = false;

  @HostListener('document:click', ['$event'])
  closeMenuOnOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('#sideMenu') && !target.closest('#hamburger')) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  emit(tab: NavTab, subtabIndex?: number) {
    if ((tab.submenus && subtabIndex != null) || !tab.submenus) {
      this.isMenuOpen = false;
    }
    this.tabSelected.emit({
      tab: tab,
      subtabIndex: subtabIndex,
    } as NavTabSelectedEvent);
  }
}
