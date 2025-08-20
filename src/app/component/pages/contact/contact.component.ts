import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  campoDeshabilitado: boolean = false;
  
  // Estados de imagen para performance
  contactImageLoaded = false;
  contactImageError = false;
  
  // Estados de validación
  nameInvalid = false;
  messageInvalid = false;
  emailInvalid = false;

  onContactImageLoad(): void {
    this.contactImageLoaded = true;
    this.contactImageError = false;
  }

  onContactImageError(): void {
    this.contactImageLoaded = true;
    this.contactImageError = true;
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Validación básica
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    this.nameInvalid = !name || name.trim().length === 0;
    this.emailInvalid = !email || !this.isValidEmail(email);
    this.messageInvalid = !message || message.trim().length === 0;
    
    // Si hay errores, no enviar
    if (this.nameInvalid || this.emailInvalid || this.messageInvalid) {
      return;
    }
    
    emailjs.sendForm('service_nt4129b', 'template_bimxuwp', form, 'l7HjmXCKX1pNHipiL')
      .then((result: EmailJSResponseStatus) => {
        console.log("Exito! " + result.text);
        alert("Correo enviado!");
        /* Desabilita los campos despues de enviar el correo */
        this.disabledFields(form);
      }, (error) => {
        console.log(error.text);
        alert("Error al enviar el correo. Por favor, intenta de nuevo.");
      });
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  disabledFields(form: HTMLFormElement): void {
    this.campoDeshabilitado = true;
  }
}
