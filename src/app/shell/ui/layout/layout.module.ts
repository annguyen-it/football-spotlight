import { ShellRoutingModule } from './../../feature/shell.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule,
    NavbarModule,
    FooterModule,
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
