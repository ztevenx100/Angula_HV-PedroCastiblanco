import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-swicher-lang',
  templateUrl: './swicher-lang.component.html',
  styleUrls: ['./swicher-lang.component.css']
})
export class SwicherLangComponent {
  lang:string = "en";
  isLangEn:boolean = true;

  constructor(public translate: TranslateService){}

  switchLang = () => {
    this.isLangEn = !this.isLangEn;
    this.lang = (this.isLangEn)?"en":"es"; 

    console.log(this.lang);
    this.translate.use(this.lang);
  }

}
