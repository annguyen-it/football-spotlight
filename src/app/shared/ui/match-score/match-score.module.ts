import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchScoreComponent } from './match-score.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MatchScoreComponent],
  exports: [MatchScoreComponent]
})
export class MatchScoreModule { }
