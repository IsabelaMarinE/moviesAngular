import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsRoutingModule } from './details-routing.module'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { DetailsEffects } from './store/effects/details.effect'
import { detailsStoreFeatureKey, detailsStoreReducer } from './store/reducers/details-store.reducer'
import { DetailsComponent } from './pages/details.component'
import { CardModule } from '../../components/card/card.module'
import { MovieService } from '../../services/movie.service'
import { FormsModule } from '@angular/forms'
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    CardModule,
    FormsModule,
    YouTubePlayerModule,
    NgbModule,
    StoreModule.forFeature(detailsStoreFeatureKey, detailsStoreReducer),
    EffectsModule.forFeature(DetailsEffects)
  ],
  providers: [
    MovieService
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DetailsModule {
  constructor() { }
}
