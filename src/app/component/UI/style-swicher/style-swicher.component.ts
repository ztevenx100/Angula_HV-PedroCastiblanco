import { Component, OnInit , Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-style-swicher',
  templateUrl: './style-swicher.component.html',
  styleUrls: ['./style-swicher.component.css']
})
export class StyleSwicherComponent {
  scriptElementSwicher: HTMLScriptElement;
  currentCssFile: string = 'color-1.css';

  constructor(@Inject(DOCUMENT) private document: Document){
    this.scriptElementSwicher = document.createElement("script");
    // this.scriptElementSwicher.src = "./assets/js/style-switcher.js";
    // document.body.appendChild(this.scriptElementSwicher);
  }

  ngOnInit(){
    // Variables
    const styleSwitcherToggler: HTMLElement | null = document.querySelector(".style-switcher-toggler");
    const styleSwitcher: HTMLElement | null = document.querySelector(".style-switcher");

    // Open
    styleSwitcherToggler?.addEventListener("click", () => {
        styleSwitcher?.classList.toggle("open");
    });

    window.addEventListener("scroll", () => {
        if (styleSwitcher?.classList.contains("open")) {
            styleSwitcher.classList.remove("open");
        }
    });

    // Theme light and dark
    const dayNight: HTMLElement | null = document.querySelector(".day-night");

    dayNight?.addEventListener("click", () => {
        dayNight?.querySelector("i")!.classList.toggle("fa-sun");
        dayNight?.querySelector("i")!.classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
    });

    window.addEventListener("load", () => {
        if (document.body.classList.contains("dark")) {
            dayNight?.querySelector("i")?.classList.add("fa-sun");
        } else {
            dayNight?.querySelector("i")?.classList.add("fa-moon");
        }
    });
  }

  setActiveStyle(color: string): void {
    // Color
    const alternateStyle: NodeListOf<HTMLElement> = document.querySelectorAll(".alternate-style");
      alternateStyle.forEach((style) => {
          if (color === style.getAttribute("title")) {
              style.removeAttribute("disabled");
          } else {
              style.setAttribute("disabled", "true");
          }
      });
  }

  setColorStyle(idColor: number): void {
    const styleElement = this.document.head.querySelector('#custom-styles') || this.document.createElement('style');
    styleElement.id = 'custom-styles';
    
    // Define las variables CSS personalizadas
    var color = "#ec1839";
    var colorDarker = "#8e0d2d";
    var colorLighter = "#ffa0a6";
    
    switch (idColor) {
      case 1:
          color = "#ec1839";
          colorDarker = "#8e0d2d";
          colorLighter = "#ffa0a6";
          break;
      case 2:
          color = "#fa5b0f";
          colorDarker = "#c3310b";
          colorLighter = "#feae73";
          break;
      case 3:
          color = "#37b182";
          colorDarker = "#128962";
          colorLighter = "#aeecce";
          break;
      case 4:
          color = "#1670f0";
          colorDarker = "#1b448d";
          colorLighter = "#90d0ff";
          break;
      case 5:
          color = "#f021b2";
          colorDarker = "#ac0874";
          colorLighter = "#ff64df";
          break;
      case 6:
          color = "#C218ED";
          colorDarker = "#850b9d";
          colorLighter = "#e56aff";
          break;
      default:
          color = "#ec1839";
          colorDarker = "#8e0d2d";
          colorLighter = "#ffa0a6";
          break;
  }

    styleElement.innerHTML = `
      :root{
        --skin-color:`+color+`;
        --skin-color-darker:`+colorDarker+`;
        --skin-color-lighter:`+colorLighter+`;
      }
    `;
    
    // Agrega la hoja de estilos a la cabecera del documento
    this.document.head.appendChild(styleElement);
    console.log(styleElement);
    //this.currentCssFile = "./assets/css/"+newCssFile;
  }

}
