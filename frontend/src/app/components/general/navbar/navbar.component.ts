import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavTab } from '../../../model/navigation.model';
import { NavigationService } from '../../../service/navigation.service';
import { BehaviorSubject } from 'rxjs';
import { NavbarMobileComponent } from '../navbar-mobile/navbar-mobile.component';
import { AsyncPipe } from '@angular/common';
import { NavbarDesktopComponent } from '../navbar-desktop/navbar-desktop.component';

@Component({
  selector: 'app-navbar',
  imports: [NavbarMobileComponent, AsyncPipe, NavbarDesktopComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  navtabs$ = new BehaviorSubject<NavTab[]>([]);
  private _navtabs: NavTab[] = [];

  @ViewChild('navbarDesktop') navbarDesktop!: ElementRef<HTMLElement>;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const el = this.navbarDesktop?.nativeElement;
    if (el && this.isElementVisible(el) && !el.contains(event.target as Node)) {
      this.navigationService.closeSubtabs();
    }
  }

  constructor(private readonly navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navtabs$ = this.navigationService.navtabs$;
    this.navtabs$.subscribe((navtabs) => {
      this._navtabs = navtabs;
    });
  }

  selectTab(event: NavTabSelectedEvent): void {
    if (!event.tab.submenus) {
      // Tab ohne Submenus gewählt => Navigation
      this.navigationService.setSelectedTab(
        event.tab.title,
        undefined,
        event.desktopBar,
      );
    } else if (event.subtabIndex != null) {
      // Subtab wurde gewählt => Navigation
      this.navigationService.setSelectedTab(
        event.tab.title,
        event.subtabIndex,
        event.desktopBar,
      );
    } else {
      // Navtab mit Subtabs aufklappen => Keine Navigation
      // Alle anderen einklappen
      for (let tabInList of this._navtabs!) {
        tabInList.expanded = false;
      }
      // Gewählten Tab aufklappen
      event.tab.expanded = true;
    }
  }

  private isElementVisible(element: HTMLElement): boolean {
    const style = window.getComputedStyle(element);

    const isDisplayed = style.display !== 'none';
    const isVisible = style.visibility !== 'hidden' && style.opacity !== '0';

    return isDisplayed && isVisible;
  }
}

export type NavTabSelectedEvent = {
  tab: NavTab;
  subtabIndex?: number;
  desktopBar?: boolean;
};
