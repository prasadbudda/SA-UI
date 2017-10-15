import { Component } from '@angular/core';
import {DialogsService} from './dialog-verification/dialogs.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public result: any;
  
  constructor(private dialogsService: DialogsService) { }
  
  public openDialog() {
    this.dialogsService
      .confirm('Verification', 'To proceed to E-Sign Autorization screens we’ll need to verify your identity. Please answer the question below.')
      .subscribe(res => this.result = res);
  }

  
}
