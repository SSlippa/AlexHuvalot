import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {AppService, IMessage} from '../app.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('flyInOut', [
      state('normal', style({
        opacity: 0.3,
        transform: 'translateY(-150px)'
      })),
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('normal =>  in', [
        animate(700)
      ]),
    ]),
  ]
})


export class ContactsComponent implements OnInit {
  visibleTrue = 'none';
  state = 'normal';
  message: IMessage = {};

  constructor(@Inject(DOCUMENT) private document: Document,
              private appService: AppService) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = this.document.body.scrollTop;
    if (number > 450) {
      this.state = 'in';
      this.visibleTrue = 'block'
    }
  }

  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(
      res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    });
    console.log(message)
  }



}
