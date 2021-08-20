import { HomeBannerBackgroundModule } from './home-banner-background/home-banner-background.module';
import { MatchTileModule } from './../shared/ui/match-tile/match-tile.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeShellComponent } from './home-shell/home-shell.component';
import { HomeRoutingModule } from './home.routes';

@NgModule({
  declarations: [
    HomeShellComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatchTileModule,
    HomeBannerBackgroundModule,
  ]
})
export class HomeModule { }
