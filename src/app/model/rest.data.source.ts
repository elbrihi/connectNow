import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const PROTOCOL = 'http://public.connectnow.org.uk/';

@Injectable()


export class RestDataSource
{
  baseUrl: string | undefined;

  token: string | undefined;

  constructor(private http: HttpClient)
  {
    this.baseUrl = `${PROTOCOL}`;

    console.log(this.baseUrl);
  }
  getVedioGames()
  {
      return this.http.get<any>(this.baseUrl + 'applicant-test/');
  }
}
