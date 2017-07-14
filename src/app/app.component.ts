import { Component} from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  // hero: Hero = {
  // id: 1,
  // name:'Windstorm'
  // };
  // heroes;
  // selectedHero: Hero;

  // constructor(private heroService: HeroService){}

  // ngOnInit(){
  //   this.heroService.getHeroes()
  //     .then(data => this.heroes = data);
  // };

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
}
// export class Hero{
//   id: number;
//   name: string;
// }


