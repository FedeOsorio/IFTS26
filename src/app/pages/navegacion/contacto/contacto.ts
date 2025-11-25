import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faClock, faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class Contacto {
  iconoMapa = faLocationDot;
  iconoTelefono = faPhone;
  iconoEmail = faEnvelope;
  iconoHorario = faClock;
  iconoFacebook = faFacebook;
  iconoInstagram = faInstagram;
  iconoMapaMarcador = faLocationDot;
  iconoEnviar = faPaperPlane;
  iconoCargando = faSpinner;
  enviando = false;

  private fb = inject(FormBuilder);

  consultaForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefono: [''],
    asunto: ['', Validators.required],
    mensaje: ['', Validators.required]
  });


  constructor() { }

  async enviarConsulta() {
    if (this.consultaForm.invalid) {
      this.consultaForm.markAllAsTouched();
      return;
    }

    this.enviando = true;

    const templateParams = {
      nombre: this.consultaForm.value.nombre,
      email: this.consultaForm.value.email,
      telefono: this.consultaForm.value.telefono,
      asunto: this.consultaForm.value.asunto,
      mensaje: this.consultaForm.value.mensaje
    };

    try {
      await emailjs.send(
        'service_o1vnw6m',
        'template_ewwjhrs',
        templateParams,
        'HNFT8qRwufsUZgNsJ'
      );

      alert('¡Consulta enviada con éxito! Te responderemos a la brevedad.');
      this.consultaForm.reset();

    } catch (error) {
      console.error('Error al enviar:', error);
      alert('Hubo un error al enviar el mensaje. Por favor intentá nuevamente o escribinos al mail directo.');
    } finally {
      this.enviando = false;
    }
  }
}
