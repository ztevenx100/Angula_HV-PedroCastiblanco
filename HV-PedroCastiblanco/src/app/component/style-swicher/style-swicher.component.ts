import { Component } from '@angular/core';

@Component({
  selector: 'app-style-swicher',
  templateUrl: './style-swicher.component.html',
  styleUrls: ['./style-swicher.component.css']
})
export class StyleSwicherComponent {
  scriptElementSwicher: HTMLScriptElement;
  constructor(){
    this.scriptElementSwicher = document.createElement("script");
    this.scriptElementSwicher.src = "./assets/js/style-switcher.js";
    document.body.appendChild(this.scriptElementSwicher);
  }
}
