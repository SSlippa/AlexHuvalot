import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {AppService, IMessage} from '../app.service';
import swal from 'sweetalert2';
import {NgForm} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('flyInOut', [
      state('normal', style({
        opacity: 0.3,
        transform: 'translateY(150px)'
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
              private appService: AppService,
              public translate: TranslateService) {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = this.document.body.scrollTop;
    if (number > 1100) {
      this.state = 'in';
      this.visibleTrue = 'block'
    }
  }

  sendEmail(form: NgForm) {
    this.appService.sendEmail(this.message).subscribe(res => {
      console.log('AppComponent Success', res);
      swal(
        'Сообщение отправлено!', '', 'success'
      );
    }, error => {
      console.log('AppComponent Error', error);
      swal ('Упс...', 'Что-то пошло не так', 'error');
    });
    console.log(this.message);
    form.reset();
  }



}
