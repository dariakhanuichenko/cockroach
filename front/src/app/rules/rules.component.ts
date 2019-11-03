import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  points: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Cockroach', points: 'Cockroach gives 10 pluses for karma'},
  {name: 'Boss cockroach', points: 'Boss cockroach gives 15 pluses for karma'},
  {name: 'Ladybug', points: 'Ladybug gives 5 minuses for karma'},
];
@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['name', 'points'];
  dataSource = ELEMENT_DATA;
  ngOnInit() {
  }

}
