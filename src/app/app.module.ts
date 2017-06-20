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
import {HttpModule} from '@angular/http';
import {AppService} from "./app.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    AboutComponent,
    ServicesComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ShareButtonsModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
