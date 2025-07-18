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

  public setSelectedTab(title: string, submenuIndex?: number) {
    let oldSelectedTab = this.navtabs.find(
      (navtab) => navtab.selected === true,
    );
    let selectedTab = this.navtabs.find((navtab) => navtab.title === title);
    let selectedSubTab;

    // Zuletzt gewählten Tab unselecten und einklappen
    if (!!oldSelectedTab) {
      oldSelectedTab.selected = false;

      if (!!oldSelectedTab.submenus) {
        oldSelectedTab.expanded = false;
        let oldSelectedSubTab = oldSelectedTab.submenus.find(
          (navtab) => navtab.selected === true,
        );
        if (!!oldSelectedSubTab) {
          oldSelectedSubTab!.selected = false;
        }
      }
    }

    selectedTab!.selected = true;

    if (submenuIndex != null) {
      selectedTab!.expanded = true;
      selectedSubTab = selectedTab!.submenus![submenuIndex];
      selectedSubTab.selected = true;
    }

    this._navtabs$.next(this.navtabs);

    const targetTab = selectedSubTab ?? selectedTab!;

    this.navigate(targetTab);
  }

  navigate(tab: NavTab) {
    this.router.navigate([tab.route]);
  }

  get navtabs$() {
    return this._navtabs$;
  }
}
