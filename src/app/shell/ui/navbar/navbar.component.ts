import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MainNavItemModel } from './../../data-access/models/main-nav-item.model';
import { NavbarProviderService } from '../../data-access/services/navbar-provider-service.service';

@Component({
  selector: 'fs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  mainNavItems!: MainNavItemModel[];
  selectedNavItems = 0;
  isMobileView = false;

  @Input() openNavMobile!: boolean;
  @Output() toggleNavMobile = new EventEmitter<void>();

  constructor(private navbarProviderService: NavbarProviderService) { }

  ngOnInit(): void {
    this.mainNavItems = this.navbarProviderService.getMainNavItems();
  }

  toggle(): void {
    this.toggleNavMobile.emit();
  }

  click(index: number): void {
    this.selectedNavItems = index;
    console.log(this.selectedNavItems);
  }
}
