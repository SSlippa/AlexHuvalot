import { Component, OnInit } from '@angular/core';
import {AppService, IMessage} from '../app.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  message: IMessage = {};

  constructor(private appService: AppService) {}

  ngOnInit() {
  }

  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    });
    console.log(message)
  }

}
