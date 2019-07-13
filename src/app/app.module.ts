import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingMsgComponent } from './greeting-msg/greeting-msg.component';
import { LangSelectorComponent } from './lang-selector/lang-selector.component';
import {LangSupportService} from './lang-support.service';


@NgModule({
  declarations: [
    AppComponent,
    GreetingMsgComponent,
    LangSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LangSupportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
