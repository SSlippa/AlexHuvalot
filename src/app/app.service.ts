import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/Rx';

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

  sendEmail(message: IMessage): Observable<IMessage> | any {
    const body = JSON.stringify(message);
    return this.http.post(this.emailUrl, body)
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
