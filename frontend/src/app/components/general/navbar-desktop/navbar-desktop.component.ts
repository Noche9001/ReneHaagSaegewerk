import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { NavTab } from '../../../model/navigation.model';
import { NavTabSelectedEvent } from '../navbar/navbar.component';

@Component({
  selector: 'app-navbar-desktop',
  imports: [NgClass],
  templateUrl: './navbar-desktop.component.html',
  styleUrl: './navbar-desktop.component.scss',
})
export class NavbarDesktopComponent {
  @Output()
  tabSelected = new EventEmitter<NavTabSelectedEvent>();

  @Input()
  navtabs: NavTab[] | null = [];

  emit(tab: NavTab, subtabIndex?: number) {
    this.tabSelected.emit({
      tab: tab,
      subtabIndex: subtabIndex,
      desktopBar: true,
    } as NavTabSelectedEvent);
  }
}
