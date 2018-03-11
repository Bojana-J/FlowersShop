import { Component, OnInit, Input } from '@angular/core';
import { Flower } from '../../flower.model';

@Component({
  selector: 'app-flower-item',
  templateUrl: './flower-item.component.html',
  styleUrls: ['./flower-item.component.css']
})
export class FlowerItemComponent implements OnInit {
 @Input() flower: Flower;

  constructor() { }

  ngOnInit() {
  }

}
