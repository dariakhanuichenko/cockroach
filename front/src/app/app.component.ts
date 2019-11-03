import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {interval, Unsubscribable} from 'rxjs';
import {QuestionService} from './services/question.service';
import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';
import {ActivatedRoute, Router} from '@angular/router';


// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

  title = 'Voting Application';
  private intervalSubscription: Unsubscribable;

  constructor(private userService: UserService,
              private questionService: QuestionService,
              private httpClient: HttpClient,
              private toaster: ToasterService,
              // ОН ДОБАВИЛ РОУТЕР!!!!!!!!!!!!!!!
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    document.body.classList.add('bg-img');
    this.userService.initUser();
    this.intervalSubscription = interval(1000).subscribe(() => this.questionService.getLastQuestion());
  }

  sendMessage(message: string): void {
    this.httpClient.put('chat', message)
      .subscribe(() => this.toaster.pop('success', 'Message sended.'));
  }

  // МЕТОД НАВИГАЦИИ
  onNavigate(url: string): void {
    this.router.navigateByUrl(url);
  }

  createGame() {
    //if (!!LocalStorageService.getUserId() && LocalStorageService.getUserId() !== 0) {
    this.router.navigateByUrl('create-a-game');
    //} else {
    //this.router.navigateByUrl('authorisation-error');
    //}
  }

  winnerPage()
  {
    this.router.navigateByUrl('winner-page');
  }

  resultPage()
  {
    this.router.navigateByUrl('result');
  }
  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
}




