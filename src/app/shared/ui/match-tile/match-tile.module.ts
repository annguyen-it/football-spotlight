import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchTileComponent } from './match-tile.component';
import { MatchScoreModule } from '../match-score/match-score.module';

@NgModule({
  imports: [CommonModule, MatchScoreModule],
  declarations: [MatchTileComponent],
  exports: [MatchTileComponent]
})
export class MatchTileModule { }
