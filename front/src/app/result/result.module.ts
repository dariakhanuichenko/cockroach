import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatProgressBarModule, MatRadioModule,
  MatTableModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {ResultComponent} from './result.component';
import {PlayComponent} from '../play/play.component';

const resRoutes: Routes = [
  { path: 'play', component: PlayComponent }
];

@NgModule({
  declarations: [
    ResultComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(resRoutes),
    MatTableModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatRadioModule
  ],
  providers: [ToasterService],
  bootstrap: [ResultComponent]
})
export class ResultModule { }
