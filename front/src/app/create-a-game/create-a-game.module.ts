import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatProgressBarModule,
  MatTableModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {CreateAGameComponent} from './create-a-game.component';
import {PlayComponent} from '../play/play.component';

const cgRoutes: Routes = [
  { path: 'play', component: PlayComponent }
];

@NgModule({
  declarations: [
    CreateAGameComponent,
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
    RouterModule.forChild(cgRoutes),
    MatTableModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatProgressBarModule
  ],
  providers: [ToasterService],
  bootstrap: [CreateAGameComponent]
})
export class CreateAGameModule { }
