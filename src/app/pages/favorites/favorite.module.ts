import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FavoriteComponent } from './pages/favorite.component';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { CardModule } from '../../components/card/card.module';


@NgModule({
  declarations: [
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    CardModule,
    NgbModule
  ],
  exports: [
    FavoriteComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FavoriteModule { }
