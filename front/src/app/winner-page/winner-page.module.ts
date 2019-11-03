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
import {WinnerPageComponent} from './winner-page.component';
import {PlayComponent} from '../play/play.component';

const winRoutes: Routes = [
  { path: 'play', component: PlayComponent }
];

@NgModule({
  declarations: [
    WinnerPageComponent,
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
    RouterModule.forChild(winRoutes),
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
  bootstrap: [WinnerPageComponent]
})
export class WinnerPageModule { }
