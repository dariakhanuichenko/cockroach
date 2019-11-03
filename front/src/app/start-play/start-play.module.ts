
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPlayComponent } from './start-play.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule} from "@angular/material";

@NgModule({
  declarations: [
    StartPlayComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [ToasterService],
  bootstrap: [StartPlayComponent]
})
export class StartPlayModule { }
