import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {interval, Unsubscribable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorageService} from '../services/local-storage.service';

@Component({
  selector: 'app-create-a-game',
  templateUrl: './create-a-game.component.html',
  styleUrls: ['./create-a-game.component.css']
})


export class CreateAGameComponent implements OnInit, OnDestroy{

  private intervalSubscription: Unsubscribable;
  constructor(private userService: UserService,
              private httpClient: HttpClient,
              private toaster: ToasterService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
  ngOnInit(): void {
    document.body.classList.add('bg-img');
    this.userService.initUser();
    // this.intervalSubscription = interval(1000).subscribe(() => this.questionService.getLastQuestion());
  }
  playGame() {
    this.router.navigate(['/play']);

  }

}
