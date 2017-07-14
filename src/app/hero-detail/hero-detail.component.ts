import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';

import { Hero } from './../hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent {
  @Input() hero: Hero;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
  private heroService: HeroService,
  private route: Router,
  private location: Location) {}

  
}

