import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {Service} from '../shared/service.model';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {DOCUMENT} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('flyInOut', [
      state('normal', style({
        opacity: 0,
        transform: 'translateY(150px)'
      })),
      transition('normal => in', animate(700, keyframes([
        style({
          transform: 'translateY(130px)',
          opacity: 0,
          offset: 0
        }),
        style({
          transform: 'translateY(50px)',
          opacity: 0.2,
          offset: 0.3
        }),
        style({
          transform: 'translateY(20px)',
          opacity: 0.3,
          offset: 0.8
        }),
        style({
          transform: 'translateY(0px)',
          opacity: 1,
          offset: 1
        }),
      ]))),
    ])
  ]
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    new Service ('Перевозка квартир', 'Мы оказываем профессиональные услуги по перевозкам квартир в Израиле. ' +
      'Переезд в новый дом – всегда радостное событие, и чтобы не обременять пеереезд головной болью, ' +
      'предоставьте всю работу нам', '/assets/transport.png'),
    new Service ('Перевозка офисов', 'Перевозка офиса в удобные часы для клиента, без потерь для бизнеса', '/assets/transport.png'),
    new Service ('Разборка и сборка мебели', 'Профессиональные сборщики с полным комплектом инструментов', '/assets/sborka_razborka.png'),
    new Service ('Упаковка', 'Упаковка ваших вещей для безопасного переезда', '../assets/upakovka.jpg'),
    new Service ('Склад', 'Воспользуйтесь складскими услугами для хранения ваших вещей', '../assets/warehouse.jpg'),
    new Service ('Услуги крана', 'Услуги крана для подъема крупногабаритных и нестандартных грузов', '../assets/kran.png')
  ];

  state = 'normal';
  state2 = 'normal';
  // public navIsFixed: boolean = false;

  serv;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = this.document.body.scrollTop;
    if (number > 450) {
      this.state = 'in';
    }
    if (number > 650) {
      this.state2 = 'in';
    }
  }

}
