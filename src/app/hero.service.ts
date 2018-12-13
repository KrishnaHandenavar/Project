import { Injectable } from '@angular/core';

import { Observable} from 'rxjs/Rx'
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',//
}
)
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}