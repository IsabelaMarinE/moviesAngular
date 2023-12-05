import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { HomeRoutingModule } from './home-routing.module'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { HomeEffects } from './store/effects/home.effect'
import { homeStoreFeatureKey, homeStoreReducer } from './store/reducers/home-store.reducer'
import { HomeComponent } from './pages/home.component'
import { CardModule } from '../../components/card/card.module'
import { MovieService } from '../../services/movie.service'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    FormsModule,
    StoreModule.forFeature(homeStoreFeatureKey, homeStoreReducer),
    EffectsModule.forFeature(HomeEffects)
  ],
  providers: [
    MovieService
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule {
  constructor() { }
}
