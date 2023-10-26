import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-swicher',
  templateUrl: './style-swicher.component.html',
  styleUrls: ['./style-swicher.component.css']
})
export class StyleSwicherComponent {
  scriptElementSwicher: HTMLScriptElement;
  constructor(){
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



}
