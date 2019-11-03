import {Component, Inject, OnInit} from '@angular/core';
import { ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-start-play',
  templateUrl: './start-play.component.html',
  styleUrls: ['./start-play.component.css']
})
export class StartPlayComponent {
  @ViewChild('secondDialog') secondDialog: TemplateRef<any>;

  constructor(private dialog: MatDialog) { }

  openDialogWithRef(ref: TemplateRef<any>) {
    this.dialog.open(ref);
  }

  openOtherDialog() {
    this.dialog.open(this.secondDialog);
  }


}

