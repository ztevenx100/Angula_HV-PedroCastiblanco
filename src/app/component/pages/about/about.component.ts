import { Component, OnInit } from '@angular/core';

class Counter {
  constructor(public count = 0){}

  actualizarCount(valorTope: number, time=1000) {
      const intervalo = setInterval(() => {
        if (this.count < valorTope) {
          this.count++;
        } else {
          clearInterval(intervalo); // Detiene el intervalo cuando se alcanza el valor tope
        }
      }, time); // Actualiza cada segundo (puedes ajustar el intervalo según tus necesidades)
    }
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  countYears: number = 0;
  counterYears: Counter = new Counter();
  counterSolutions: Counter = new Counter();
  counterRequest: Counter = new Counter();

  constructor() {}

  ngOnInit(): void {
    this.counterYears.actualizarCount(5, 600);
    this.counterSolutions.actualizarCount(565,10);
    this.counterRequest.actualizarCount(710,8);
  }

}
