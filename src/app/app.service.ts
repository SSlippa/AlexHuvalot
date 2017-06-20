import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IMessage {
  name?: string,
  telephon?: string,
  message?: string
}

@Injectable()
export class AppService {
  private emailUrl = '../assets/contact.php';

  constructor(private http: Http) {

  }

  // const data = {email : this.emailUrl, msg: message};
  // JSON.stringify(message);

  sendEmail(message: IMessage): Observable<IMessage> | any {
    const msg = {msg: message};
    JSON.stringify(msg);
    return this.http.post(this.emailUrl, msg)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error)
      })
  }
}
