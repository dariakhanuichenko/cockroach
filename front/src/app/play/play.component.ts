import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

export interface PeriodicElement {
  nul: string;
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
  six: string;
  seven: string;
  eight: string;
  nine: string;
  ten: string;
  eleven: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nul: '1', one: '', two: '', three: '', four: '', five: '', six: '', seven: '', eight: '',nine:'',ten:'',eleven:''},
  {nul: '2',  one: '', two: '', three: '', four: '', five: '', six: '', seven: '', eight: '',nine:'',ten:'',eleven:''},
  {nul: '3', one: '', two: '', three: '', four: '', five: '', six: '', seven: '', eight: '',nine:'',ten:'',eleven:''},
  {nul: '4',  one: '', two: '', three: '', four: '', five: '', six: '', seven: '', eight: '',nine:'',ten:'',eleven:''},
  {nul: '5',  one: '', two: '', three: '', four: '', five: '', six: '', seven: '', eight: '',nine:'',ten:'',eleven:''},
  {nul: '6',  one: '', two: '', three: '', four: '', five: '', six: '', seven: '', eight: '',nine:'',ten:'',eleven:''},
  {nul: '7',  one: '', two: '', three: '', four: '', five: '', six: '', seven: '', eight: '',nine:'',ten:'',eleven:''},
  {nul: '8',  one: '', two: '', three: '', four: '', five: '', six: '', seven: '', eight: '',nine:'',ten:'',eleven:''},
];

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent {
  displayedColumns: string[] = ['nul', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];
  dataSource = ELEMENT_DATA;
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  route: any;
  constructor(private router: Router) {
  }
  myControl = new FormControl();
  myControl1 = new FormControl();
  options: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];
  options1: string[] = ['A', 'B', 'C', 'D', 'F', 'E', 'G', 'H', 'I', 'J', 'S', 'P', 'O'];
}

