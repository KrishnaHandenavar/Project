import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero"
@Component({
  selector: 'app-mock-heroes',
  templateUrl: './mock-heroes.component.html',
  styleUrls: ['./mock-heroes.component.css']
})

export class MockHeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
