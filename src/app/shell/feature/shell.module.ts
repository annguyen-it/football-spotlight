import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellRoutingModule } from './shell.routes';
import { LayoutModule } from '../ui/layout/layout.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ShellRoutingModule,
    LayoutModule,
  ],
  exports: [RouterModule]
})
export class ShellModule { }
