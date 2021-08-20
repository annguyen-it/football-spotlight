import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'fs-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  openNavMobile = false;

  constructor() { }

  toggleNavMobile(): void {
    this.openNavMobile = !this.openNavMobile;
    document.querySelector('body')!.style.overflow = this.openNavMobile ? 'hidden' : 'visible';
  }
}
