import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params['text']);
      this.termino = params['text'];
      // console.log(this._heroesService.buscarHeroes(params['text']));
      // console.log(this.heroes);
    });
  }

}
