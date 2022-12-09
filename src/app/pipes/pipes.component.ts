import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  obj: object = {
    name: 'Tanjiro',
    job: 'Demon Slayer'
  };

  amount: number = 100;

  whisper: string = 'SHHHH THIS IS A LIBRARY!';

  yell: string = 'ahhhhhhhhh!';

  num: number = 3;
}