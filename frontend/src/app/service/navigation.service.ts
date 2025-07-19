import { Injectable } from '@angular/core';
import { NAV_TABS, NavTab } from '../model/navigation.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private navtabs = NAV_TABS;
  private _navtabs$ = new BehaviorSubject<NavTab[]>(this.navtabs);

  constructor(private readonly router: Router) {}

  public setSelectedTab(
    title: string,
    submenuIndex?: number,
    desktopBar: boolean = false,
  ) {
    const oldTab = this.navtabs.find((tab) => tab.selected);
    const newTab = this.navtabs.find((tab) => tab.title === title);

    if (!newTab) {
      console.error('Fehler beim Tabselect: Kein Tab wurde übergeben');
      return;
    }

    // Alten Tab und Subtabs unselecten und einklappen
    if (oldTab) {
      oldTab.selected = false;
      oldTab.submenus?.forEach((sub) => (sub.selected = false));
      if (oldTab != newTab) {
        oldTab.expanded = false;
      }
    }

    // Neuen Tab & Subtab selecten
    newTab.selected = true;
    let selectedSubTab;

    if (submenuIndex != null && newTab.submenus?.[submenuIndex]) {
      selectedSubTab = newTab.submenus[submenuIndex];
      selectedSubTab.selected = true;
    }

    if (desktopBar) {
      newTab.expanded = false;
    }

    this._navtabs$.next(this.navtabs);
    this.navigate(selectedSubTab ?? newTab);
  }

  navigate(tab: NavTab) {
    this.router.navigate([tab.route]);
  }

  get navtabs$() {
    return this._navtabs$;
  }
}
