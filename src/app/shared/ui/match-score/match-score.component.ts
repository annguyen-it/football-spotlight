import { Component, Input } from '@angular/core';

@Component({
  selector: 'fs-match-score',
  templateUrl: './match-score.component.html',
  styleUrls: ['./match-score.component.css']
})
export class MatchScoreComponent {
  @Input() left!: number;
  @Input() right!: number;
}
