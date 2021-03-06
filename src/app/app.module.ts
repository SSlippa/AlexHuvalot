import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ShareButtonsModule} from 'ngx-sharebuttons';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContactsComponent } from './contacts/contacts.component';
import {Http, HttpModule} from '@angular/http';
import {AppService} from './app.service';
import {FormsModule} from '@angular/forms';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import {CarouselModule} from 'ngx-bootstrap';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    AboutComponent,
    ServicesComponent,
    ContactsComponent,
    CarouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ShareButtonsModule.forRoot(),
    Ng2PageScrollModule.forRoot(),
    CarouselModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
