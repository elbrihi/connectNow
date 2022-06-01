import {Component, Input, OnInit} from '@angular/core';
import {VedioGameRepository} from '../../model/vedio-game/vedio.game.repository';
import {RestDataSource} from '../../model/rest.data.source';
import {VedioGameModel} from '../../model/vedio-game/vedio.game.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'vedio-games',
  templateUrl: './vedio.game.component.html',
  styleUrls: ['./vedio.game.component.css']
})
export class VedioGameComponent implements OnInit {

  public vedio_games: VedioGameModel[] = [];
  package: any;
  filterData = [];
  order = '';
  name = '' ;
  orderBy = [
    {viewValue: 'Release Date', value: 'first_release_date'},
    {viewValue: 'Score', value: 'rating'},
    {viewValue: 'Name', value: 'name'},
  ];
  // tslint:disable-next-line:typedef
  selected: any;
  minScore = '' ;
  ratingData = [];
  distanceDropdownItems: any = [];


  constructor(
    private vedio_game_repository: VedioGameRepository,
    private rest_data_source: RestDataSource,
    public vedio: VedioGameModel
  )
  {
    const str = 'Release Date';
  }

  get getVedioGames()
  {
    return this.vedio_game_repository.getVedioGames();
  }




  ngOnInit(): void {

    this.distanceDropdownItems = ['hello', 'you', 'there'];
    console.log('FORMS dropdown items = ', this.distanceDropdownItems);



    this.rest_data_source.getVedioGames().subscribe(data => {
      this.vedio_games = data;
      this.packageList(this.vedio_games);

    });


  }

  // tslint:disable-next-line:variable-name
  public timestampToDate(date_stramp= ''): string
  {
    const d = new Date(date_stramp);

    return d.toLocaleDateString();

  }

  public shortSummary(summary = ''): string
  {
    return summary.slice(0, 200);
  }

  packageList(vedios: VedioGameModel[]): any {

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < vedios.length; i++) {
      // @ts-ignore
      this.filterData.push(vedios[i]);
      this.package = this.filterData;

    }
  }
  getOrder(order: string): any
  {
      console.log('order', order);
  }
  valueChange(): any
  {

    if (this.selected === 'first_release_date')
    {

      // tslint:disable-next-line:only-arrow-functions typedef
      this.filterData = this.filterData.sort(function(a, b) {

        // @ts-ignore
        return parseFloat(a.first_release_date) - parseFloat(b.first_release_date);
      });


    }



    if (this.selected === 'rating')
    {
      // tslint:disable-next-line:only-arrow-functions typedef
      this.filterData = this.filterData.sort(function(a, b) {

        // @ts-ignore
        return parseFloat(a.rating) - parseFloat(b.rating);
      });
    }
    if (this.selected === 'name')
    {
      // tslint:disable-next-line:only-arrow-functions typedef
      this.filterData  = this.filterData.sort(function(a, b) {

        // @ts-ignore
        return a.name.localeCompare(b.name);
      });

    }

    this.package = this.filterData ;



  }



  storeName(event: any): any
  {
      this.name = event;

      this.name = this.name.toLowerCase();
      this.package = this.filterData.filter(item =>
      {
        // @ts-ignore
        return item.name.toLowerCase().includes(this.name)  ;
      }
    );

  }
  minimumScore(rating: string): any {

    // @ts-ignore
    this.ratingData = rating.split('-');
    // @ts-ignore

    this.ApplyFilters();


  }
  ApplyFilters(): any
  {




      // @ts-ignore
      this.package = this.filterData.filter(item =>
      {
        // @ts-ignore
              if (item.rating >= parseFloat(this.ratingData[0])  && item.rating <= parseFloat(this.ratingData[1]) )
              {
                return true ;
              }
          //  console.log( this.ratingData[0]);

      }
    );


  }


  onClick(): any {

    this.package = this.vedio_game_repository.vedio_games;
  }
}
