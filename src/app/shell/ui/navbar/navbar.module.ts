import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { SubnavModule } from '../subnav/subnav.module';
import { DropdownButtonModule } from '../../../shared/ui/dropdown-button/dropdown-button.module';

@NgModule({
  imports: [
    CommonModule,
    SubnavModule,
    DropdownButtonModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
