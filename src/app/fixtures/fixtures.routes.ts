import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixturesShellComponent } from './fixtures-shell/fixtures-shell.component';

const routes: Routes = [
  {
    path: '',
    component: FixturesShellComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixturesRoutingModule { }
