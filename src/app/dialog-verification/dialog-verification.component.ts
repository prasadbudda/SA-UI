import {MdDialogRef} from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-verification',
  templateUrl: './dialog-verification.component.html',
  styleUrls: ['./dialog-verification.component.css']
})

export class DialogVerificationComponent implements OnInit {

  public title: string;
  public message: string;
  public valueIncorrect = false;
  public questions:any[] = [];
  constructor(public dialogRef: MdDialogRef<DialogVerificationComponent>) {

  }

  dialogSubmit(value){
    if(value == false){
      this.valueIncorrect = true;

    }
  }
  ngOnInit() {
  }

}
