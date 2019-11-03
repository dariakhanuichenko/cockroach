import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {interval, Unsubscribable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-winner-page',
  templateUrl: './winner-page.component.html',
  styleUrls: ['./winner-page.component.css']
})
export class WinnerPageComponent implements OnInit {

  constructor(private userService: UserService,
              private httpClient: HttpClient,
              private toaster: ToasterService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
