import { SubNavItemModel } from './../models/sub-nav-item.model';
import { MainNavItemModel } from './../models/main-nav-item.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarProviderService {
  private mainNavItems = MAIN_NAV_ITEMS;
  private subNavItemModel = SUB_NAV_ITEMS;

  getMainNavItems(): MainNavItemModel[] {
    return this.mainNavItems;
  }

  getSubNavItemModel(): SubNavItemModel[] {
    return this.subNavItemModel;
  }
}

const MAIN_NAV_ITEMS: MainNavItemModel[] = [
  {
    name: 'Premiere League',
    displayOnTablet: true,
    showDropdownItemsOnTablet: true,
    leadingIcon: 'far fa-futbol',
    trailingIcon: 'fas fa-caret-down',
    navItems: [
      'Home',
      'Fixtures',
      'Results',
      'Tables',
      'Hall of Fame',
      'Transfers',
      'Broadcast',
      'Tickets',
      'Clubs',
      'Players',
      'Managers',
      'News',
      'Social',
      'Youth',
      'History',
      'Referees',
      'Safeguarding',
    ]
  },
  {
    name: 'Fantasy',
    displayOnTablet: true,
    showDropdownItemsOnTablet: true,
    leadingIcon: 'fas fa-trophy',
    trailingIcon: 'fas fa-caret-down',
    navItems: [
      'Fantasy',
      'Fantasy Drafts',
    ]
  },
  {
    name: 'Video',
    displayOnTablet: true,
    showDropdownItemsOnTablet: false,
    leadingIcon: 'fas fa-video',
    trailingIcon: 'fas fa-caret-down',
    navItems: [
      'Dashboard',
      'Fantasy',
      'All Videos',
    ]
  },
  {
    name: 'Communities',
    displayOnTablet: true,
    showDropdownItemsOnTablet: true,
    leadingIcon: 'fas fa-users',
    trailingIcon: 'fas fa-caret-down',
    navItems: [
      'Latest',
      'Strategy',
      'Programmes',
      'Facilities',
      'PL Charitable Fund',
      'Supporting the Game',
    ]
  },
  {
    name: 'More',
    displayOnTablet: true,
    showDropdownItemsOnTablet: true,
    leadingIcon: 'fas fa-ellipsis-v',
    trailingIcon: 'fas fa-caret-down',
    navItems: [
      'Stats',
      'Stay Well',
      'We Are One Team',
      'Rainbow Laces',
      'King of the Match',
      'Transfers',
      'VAR',
      'Photos',
      'Partners',
      'USA Bar Finder',
      'ePremier League',
      'About',
      'Season Review',
      'Nike Ball Hub',
      'Contact Us',
      'Poppy',
      'Asia Trophy',
      'PL Live',
      'Publications',
      'Legal',
      'Hall of Fame',
    ]
  },
  {
    name: 'Club',
    displayOnTablet: false,
    navItems: ['Item 1', 'Item 2'],
    showDropdownItemsOnTablet: false,
    trailingIcon: 'fal fa-external-link',
    leadingIcon: 'fas fa-shield',
  }
]

const SUB_NAV_ITEMS: SubNavItemModel[] = [
  { name: 'Home', url: '' },
  { name: 'Fixtures', url: '' },
  { name: 'Results', url: '' },
  { name: 'Tables', url: '' },
  { name: 'Hall of Fame', url: '' },
  { name: 'Transfers', url: '' },
  { name: 'Broadcast', url: '' },
  { name: 'Tickets', url: '' },
  { name: 'Clubs', url: '' },
  { name: 'Players', url: '' },
  { name: 'Managers', url: '' },
  { name: 'News', url: '' },
  { name: 'Social', url: '' },
  { name: 'Youth', url: '' },
  { name: 'History', url: '' },
  { name: 'Referees', url: '' },
  { name: 'Safeguarding', url: '' },
]
