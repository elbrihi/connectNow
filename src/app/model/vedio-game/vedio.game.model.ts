import {Injectable} from '@angular/core';


@Injectable()

export class VedioGameModel
{
    public id?: number;
    public first_release_date?: string;
    public name?: string;
    public rating?: number;
    public summary?: string;

  constructor()
  {}
}
