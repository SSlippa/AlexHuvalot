import { Component, OnInit } from '@angular/core';
import {AppService, IMessage} from '../app.service';
import swal, { SweetAlertOptions } from 'sweetalert2';
import {NgForm} from '@angular/forms';

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
