import { Injectable } from '@angular/core';
import {LANG_INFO} from './langInfo';
@Injectable({
  providedIn: 'root'
})
export class LangSupportService {
 langCode = 'ko';
 //private welcomeMsg;

  constructor() {
    //this.langCode = 'ko';
  }
  getWelcomeMsg(userName: string, code: string) {
    const langData = LANG_INFO.find(selLang => selLang.code === this.langCode);
    return `${langData.expression}, ${userName}!`;
  }
  /*getWelcomeMsg(userName: string) {
    const greetingMsg = this.welcomeMsg(this.langCode);
    return `${greetingMsg}, ${userName}`
  }*/
}
