import { Component, OnInit } from '@angular/core';
import {LangSupportService} from '../lang-support.service';
import {LANG_INFO} from '../langInfo';
@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.sass']
})
export class LangSelectorComponent implements OnInit {
  langData = LANG_INFO;
  langCode: string;
  constructor(public LangSupporter: LangSupportService) {
    this.langCode = LangSupporter.langCode;
  }

  ngOnInit() {
  }
  setLangCode(code: string) {
    this.langCode = code;
    this.LangSupporter.langCode = code;
  }
}
