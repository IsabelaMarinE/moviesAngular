import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
