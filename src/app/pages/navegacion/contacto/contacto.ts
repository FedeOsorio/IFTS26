import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { CommonModule } from '@angular/common';

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

  private fb = inject(FormBuilder);

  consultaForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefono: [''],
    asunto: ['', Validators.required],
    mensaje: ['', Validators.required]
  });

  constructor() { }

  enviarConsulta(): void {
    if (this.consultaForm.valid) {
      console.log('Formulario válido, enviando:', this.consultaForm.value);
      // TODO - Lógica para enviar formulario de contacto por correo
      alert('¡Consulta enviada! (ver consola para datos)');
      this.consultaForm.reset();
    } else {
      console.log('Formulario inválido');
      this.consultaForm.markAllAsTouched();
    }
  }
}
