import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';


@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url = '/api/heroes';

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => {
        return response.json() as Hero[];
      })
      .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
    return this.http
      .post(this.url, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Hero)
      .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
