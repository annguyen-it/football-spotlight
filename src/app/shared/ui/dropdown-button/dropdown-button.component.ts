import { Component, Input, OnInit } from '@angular/core';
import { MainNavItemModel } from '../../../shell/data-access/models/main-nav-item.model';

@Component({
  selector: 'fs-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.css']
})
export class DropdownButtonComponent implements OnInit {
  @Input() item!: MainNavItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
