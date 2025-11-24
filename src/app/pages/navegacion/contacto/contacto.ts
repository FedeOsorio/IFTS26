/**
 * Componente Contacto - Página de contacto con formulario y datos institucionales
 * 
 * Desarrollé esta página para centralizar toda la información de contacto del instituto
 * y permitir que estudiantes y visitantes envíen consultas directamente. Incluye:
 * - Formulario de contacto con validación (nombre, email, teléfono, asunto, mensaje)
 * - Información de ubicación, teléfonos y horarios de atención
 * - Enlaces a redes sociales institucionales
 * - Mapa interactivo de Google Maps embebido
 * 
 * El formulario utiliza ReactiveFormsModule de Angular para validaciones robustas
 * y envía las consultas directamente al cliente de email del usuario con los datos
 * de ambas carreras como destinatarios.
 * 
 * @author Marcos - IFTS N°26
 */

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
  // Iconos de FontAwesome para los diferentes elementos de contacto
  iconoMapa = faLocationDot;
  iconoTelefono = faPhone;
  iconoEmail = faEnvelope;
  iconoHorario = faClock;
  iconoFacebook = faFacebook;
  iconoInstagram = faInstagram;
  iconoMapaMarcador = faLocationDot;

  // Inyecto FormBuilder para construir el formulario reactivo
  private fb = inject(FormBuilder);

  /**
   * Formulario reactivo de consulta
   * 
   * Configuré este formulario con validaciones específicas:
   * - nombre: requerido
   * - email: requerido + formato de email válido
   * - telefono: opcional
   * - asunto: requerido
   * - mensaje: requerido
   */
  consultaForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefono: [''],
    asunto: ['', Validators.required],
    mensaje: ['', Validators.required]
  });

  constructor() { }

  /**
   * Procesa el envío del formulario de consulta
   * 
   * Cuando el formulario es válido, construyo un email pre-formateado con todos
   * los datos ingresados y abro el cliente de email predeterminado del usuario.
   * El email se envía a ambas carreras (GIR y HyS) simultáneamente.
   * 
   * Después de un breve delay, reseteo el formulario para que el usuario pueda
   * enviar otra consulta si lo necesita.
   * 
   * Si el formulario tiene errores, marco todos los campos para mostrar visualmente
   * cuáles necesitan corrección.
   */
  enviarConsulta(): void {
    if (this.consultaForm.valid) {
      const formData = this.consultaForm.value;
      
      // Construyo el cuerpo del email con formato legible
      const emailBody = `Nombre: ${formData.nombre}%0D%0AEmail: ${formData.email}%0D%0ATeléfono: ${formData.telefono || 'No proporcionado'}%0D%0AAsunto: ${formData.asunto}%0D%0A%0D%0AMensaje:%0D%0A${formData.mensaje}`;
      
      // Emails de las dos carreras del instituto
      const emailGIR = 'tecnicaturagir@yahoo.com';
      const emailHyS = 'tecnicaturaenseguridadhigiene@yahoo.com.ar';
      
      // Abro el cliente de email con ambos destinatarios pre-configurados
      window.location.href = `mailto:${emailGIR},${emailHyS}?subject=${encodeURIComponent(formData.asunto || 'Consulta desde web IFTS26')}&body=${emailBody}`;
      
      // Reseteo el formulario tras un delay breve
      setTimeout(() => {
        this.consultaForm.reset();
      }, 500);
      
    } else {
      console.log('Formulario inválido');
      // Marco todos los campos para mostrar errores visuales
      this.consultaForm.markAllAsTouched();
    }
  }
}
