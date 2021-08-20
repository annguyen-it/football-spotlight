import { SubNavItemModel } from './../../data-access/models/sub-nav-item.model';
import { NavbarProviderService } from './../../data-access/services/navbar-provider-service.service';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'fs-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.css']
})
export class SubnavComponent implements OnInit, AfterViewInit {
  @ViewChild('subNav') subNavEl!: ElementRef<HTMLElement>;
  @ViewChild('subNavContainer') subNavContainerEl!: ElementRef<HTMLElement>;
  @ViewChild('subNavDropdown') subNavDropdownEl!: ElementRef<HTMLElement>;
  @ViewChild('more') moreBtnEl!: ElementRef<HTMLElement>;

  subNavItems!: SubNavItemModel[];

  private subNavItemsOffsetRight!: number[];

  constructor(private navbarProviderService: NavbarProviderService) { }
 
  ngOnInit(): void {
    this.subNavItems = this.navbarProviderService.getSubNavItemModel();
  }

  ngAfterViewInit(): void {
    const subNavItems = this.subNavEl.nativeElement.children;
    const subNavItemsArray = Array.from(subNavItems) as HTMLElement[];
    this.subNavItemsOffsetRight = subNavItemsArray.map((e) => e.getBoundingClientRect().right);

    cloneChildren(this.subNavDropdownEl.nativeElement, subNavItemsArray);
    const subNavDropdownItems = this.subNavDropdownEl.nativeElement.children;

    fromEvent(window, 'resize').pipe(
      map(getWindowWidth),
      startWith(getWindowWidth())
    ).subscribe((width) => {
      let i = 0;
      for (; i < this.subNavItemsOffsetRight.length - 1; i++) {
        if (this.subNavItemsOffsetRight[i] + 100 < width) {
          subNavItems.item(i)?.classList.remove('hidden');
          subNavDropdownItems.item(i)?.classList.add('hidden');
        } else {
          break;
        }
      }

      if (i === this.subNavItemsOffsetRight.length - 1) {
        this.moreBtnEl.nativeElement.classList.add('hidden');
      }
      else {
        this.moreBtnEl.nativeElement.classList.remove('hidden');

        for (; i < this.subNavItemsOffsetRight.length - 1; i++) {
          subNavItems.item(i)?.classList.add('hidden');
          subNavDropdownItems.item(i)?.classList.remove('hidden');
        }
      }
    });

    this.subNavContainerEl.nativeElement.classList.add('hidden', 'lg:block')
  }

  @HostListener('document:click')
  hideMoreDropdown(): void {
    if (!this.subNavDropdownEl.nativeElement.classList.contains('hidden')) {
      this.subNavDropdownEl.nativeElement.classList.add('hidden');
    }
  }
  toggleMoreDropdown(event: Event): void {
    event.stopPropagation();
    this.subNavDropdownEl.nativeElement.classList.toggle('hidden');
  }
}

function getWindowWidth(): number {
  return window.innerWidth;
}

function cloneChildren(des: HTMLElement, children: HTMLElement[]) {
  children
    .filter(e => !e.classList.contains('more'))
    .map(e => e.cloneNode(true))
    .forEach(e => des.appendChild(e));
}
