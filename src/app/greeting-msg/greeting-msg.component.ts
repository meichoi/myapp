import {AfterViewInit, Component} from '@angular/core';
import {LangSupportService} from '../lang-support.service';
@Component({
  selector: 'app-greeting-msg',
  templateUrl: './greeting-msg.component.html',
  styleUrls: ['./greeting-msg.component.sass']
})
export class GreetingMsgComponent implements AfterViewInit{
 welcomeMsg = '';
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;
  userName = '임시';

  constructor(public LangSupporter: LangSupportService) {}

  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if(this.valid) return;
      /*alert('이름을 입력');*/
    };
    setTimeout(checkTouchedFn, GreetingMsgComponent.CHK_KEYUP_WAIT_SEC);
  }

  onKeyUp(tname) {
    this.valid = tname.length > 0;
  }
  onChange() {
    this.valid = this.userName.length > 0;
  }
   showWelcomeMsg() {
     this.welcomeMsg = this.LangSupporter.getWelcomeMsg(this.userName, 'ko');
   }
   /*
   showWelcomeMsg() {
     this.welcomeMsg = this.LangSupporter.getWelcomeMsg(this.userName);
   }
   */
}
