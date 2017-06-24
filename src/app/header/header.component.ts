import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isIn = false;   // store state
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

  constructor(private translate: TranslateService) {

  translate.addLangs(['ru', 'heb']);
  translate.setDefaultLang('ru');

  let browserLang = translate.getBrowserLang();
  translate.use(browserLang.match(/heb|ru/) ? browserLang : 'heb');
  }

  ngOnInit() {
  }

}
