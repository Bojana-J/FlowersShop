import { Component, OnInit } from '@angular/core';

import { Flower } from '../flower.model';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css']
})
export class FlowerListComponent implements OnInit {
  flowers: Flower[] = [
    new Flower ('First flower', 'This is a test flower', 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Inside_of_a_tulip.JPG' ),
    new Flower ( 'Second flower', 'It"s another flower', 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Pink-rose.jpg' )
  ];

  constructor() { }

  ngOnInit() {
  }

}
