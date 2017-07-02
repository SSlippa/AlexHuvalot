import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  language = ['עיברית', 'русский'];
  isIn = false;   // store state
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

  constructor(private translate: TranslateService) {

  translate.addLangs(['heb', 'ru']);
  translate.setDefaultLang('heb');

  let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/heb|ru/) ? browserLang : 'heb');


  }

  ngOnInit() {

  }

}
