import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {interval, Unsubscribable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';
import {ActivatedRoute, Router} from '@angular/router';
export interface PeriodicElement {
  name: string;
  result: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'User1', result: 100},
  {name: 'User2', result: 100},
  {name: 'User3', result: 100},
  {name: 'User4', result: 100},
  {name: 'User5', result: 100},
  {name: 'User6', result: 100},
  {name: 'User7', result: 100},
  {name: 'User8', result: 100},
  {name: 'User9', result: 100},
  {name: 'User10', result: 100},
  {name: 'User11', result: 100},
  {name: 'User12', result: 100},
  {name: 'User13', result: 100},
  {name: 'User14', result: 100},
  {name: 'User15', result: 100}
];
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  displayedColumns: string[] = ['name', 'result'];
  dataSource = ELEMENT_DATA;
  constructor( private userService: UserService,
               private httpClient: HttpClient,
               private toaster: ToasterService,
               private router: Router,
               private route: ActivatedRoute) { }
}
