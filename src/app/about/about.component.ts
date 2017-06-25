import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private translate: TranslateService) {

    translate.addLangs(['ru', 'heb']);
    translate.setDefaultLang('ru');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/heb|ru/) ? browserLang : 'heb');
  }

  ngOnInit() {
  }

}
