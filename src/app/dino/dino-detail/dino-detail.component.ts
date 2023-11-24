import { Component, OnInit, Input } from '@angular/core';
import { Dino } from '../dino';

@Component({
  selector: 'app-dino-detail',
  templateUrl: './dino-detail.component.html',
  styleUrls: ['./dino-detail.component.css']
})
export class DinoDetailComponent implements OnInit {

  @Input() dinoDetail!: Dino;
  constructor() { }

  ngOnInit() {
  }

}
