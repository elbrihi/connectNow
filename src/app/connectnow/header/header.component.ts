import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /*private distanceDropdownItems: string[] | undefined;*/

  @Input() dropdownItems: any[] | undefined;

  public currentRoute: string | undefined;
  constructor(private router: Router)
  {
        // @ts-ignore
        this.router.events.subscribe((event: Event) =>
        {
          if (event instanceof NavigationEnd) {
            // Hide loading indicator
            this.currentRoute = event.url;
            // console.log(event);
          }
        });


  }

  ngOnInit(): void {
    console.log('header', this.dropdownItems);

  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  public getRouterActive(): string
  {


    if (this.router.url === '/contact')
    {
        return 'active';
    }
    if (this.router.url === '/vedioGames')
    {
      return 'active';
    }
  }

}
/*console.log(this.router.url);*/
