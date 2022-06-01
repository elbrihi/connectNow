import {Injectable, Output} from '@angular/core';
import {RestDataSource} from '../rest.data.source';
import {VedioGameModel} from './vedio.game.model';




@Injectable()
export class VedioGameRepository
{

  /* public users:User[] = [];*/

  public vedio_games: VedioGameModel[] = [];
  // @ts-ignore

  constructor(
    private rest_data_source: RestDataSource
  )
  {
      this.rest_data_source.getVedioGames().subscribe(data =>
      {
          this.vedio_games = data;

          console.log(this.vedio_games);

      });
  }

  getVedioGames(): any
  {
      return this.vedio_games;
  }

}
