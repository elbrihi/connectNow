import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {VedioGameRepository} from './vedio-game/vedio.game.repository';
import {RestDataSource} from './rest.data.source';
import {VedioGameModel} from './vedio-game/vedio.game.model';

@NgModule({
  imports: [HttpClientModule],
  providers: [

    VedioGameRepository,
    VedioGameModel,
    RestDataSource,
  ]
})

export class ModelModule
{

}
