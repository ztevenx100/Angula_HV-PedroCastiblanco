import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  campoDeshabilitado: boolean = false;

  public sendEmail(e: Event) {

    e.preventDefault();
    emailjs.sendForm('service_nt4129b', 'template_bimxuwp', e.target as HTMLFormElement, 'l7HjmXCKX1pNHipiL')
      .then((result: EmailJSResponseStatus) => {
        console.log("Exito! " + result.text);
        alert("Correo enviado!");
        /* Desabilita los campos despues de enviar el correo */
        this.disabledFields(e.target as HTMLFormElement);
      }, (error) => {
        console.log(error.text);
      });
        
  }

  disabledFields(form:HTMLFormElement):void {
    this.campoDeshabilitado=true;
  }

}
