import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AnswerComponent } from './answer/answer.component';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainComponent} from './main/main.component';
import {MatTableModule} from '@angular/material/table';
// IMPORT
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatProgressBarModule, MatRadioModule, MatTabsModule
} from '@angular/material';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';
import { RulesComponent } from './rules/rules.component';
import { CreateAGameComponent } from './create-a-game/create-a-game.component';
import { PlayComponent } from './play/play.component';
import {WinnerPageComponent} from './winner-page/winner-page.component';
import { RoomBusyComponent } from './room-busy/room-busy.component';
import { StartPlayComponent } from './start-play/start-play.component';
import { DialogOverviewExampleDialogComponent } from './start-play/dialog-overview-example-dialog/dialog-overview-example-dialog.component';

// ТУТ ХРАНЯТСЯ ССЫЛКИ ДЛЯ КОМПОНЕНТОВ
const appRoutes: Routes = [

  { path: 'winner-page', component: WinnerPageComponent, children: [{path: 'play', component: PlayComponent}] },
  { path: 'result', component: ResultComponent , children: [{path: 'play', component: PlayComponent}]},
  {path: 'main', component: MainComponent},
  {path: 'create-a-game', component: CreateAGameComponent, children: [{path: 'play', component: PlayComponent}]},
  { path: 'rules', component: RulesComponent},
  {path: 'room-busy', component: RoomBusyComponent},
  {path: 'start-play', component: StartPlayComponent}
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    MainComponent,
    ResultComponent,
    WinnerPageComponent,
    QuestionComponent,
    ResultComponent,
    RulesComponent,
    CreateAGameComponent,
    PlayComponent,
    MainComponent,
    RoomBusyComponent,
    StartPlayComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    RouterModule,
    FormsModule,
    MatTableModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes),
    MatListModule,
    LayoutModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
