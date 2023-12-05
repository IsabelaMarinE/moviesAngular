import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule,
    NgbModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
