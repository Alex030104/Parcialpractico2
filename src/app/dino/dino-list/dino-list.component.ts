import { Component, OnInit } from '@angular/core';
import { Dino } from '../dino';
import { DinoService } from '../dino.service';

@Component({
  selector: 'app-dino-list',
  templateUrl: './dino-list.component.html',
  styleUrls: ['./dino-list.component.css']
})
export class DinoListComponent implements OnInit {

  selected: Boolean = false

  dinos: Array<Dino> = [];
  constructor( private dinoService: DinoService) { }

  getDinos(): void {
    this.dinoService.getDinos().subscribe((dinos) => {
      this.dinos = dinos;
    });
  }

  ngOnInit() {
    this.getDinos
  }

}
