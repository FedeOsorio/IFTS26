/**
 * Componente Cooperadora - Información sobre la cooperadora escolar
 * 
 * Desarrollé esta página para informar a los estudiantes sobre la cooperadora
 * del distrito 6, que apoya al IFTS N°26 con mejoras edilicias y recursos.
 * 
 * La cooperadora es voluntaria pero fundamental para:
 * - Mejoras en la infraestructura del instituto
 * - Compra de equipamiento didáctico
 * - Material de biblioteca
 * - Apoyo a actividades institucionales
 * 
 * Incluye información sobre:
 * - Cuotas mensuales y anuales
 * - Métodos de pago (efectivo y transferencia)
 * - Datos bancarios actualizados
 * - Contacto para envío de comprobantes
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

@Component({
  selector: 'app-cooperadora',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './cooperadora.html',
  styleUrl: './cooperadora.scss'
})
export class Cooperadora {
  /**
   * Información detallada sobre la cooperadora
   * 
   * Incluyo todos los datos que los alumnos necesitan para colaborar:
   * formas de pago, datos bancarios, importes actualizados y contacto.
   * El contenido usa HTML para mantener el formato en la vista.
   */
  descripcion: string = `Seguimos recaudando cuotas de cooperadora. Recuerden que la misma puede abonarse en efectivo por sobre cerrado en cuaderno indicando nombre, apellido, carrera y año. Detallando importe.<br><br>También puede abonar por transferencia bancaria a la siguiente cuenta:<br><strong>CBU:</strong> 0290016200000000216928<br><strong>ALIAS:</strong> CHINETTI.COPE<br><br>Una vez que realicen el pago pueden enviar el comprobante al mail: <strong>cooperadorabelgranodto6@gmail.com</strong><br><br>Cuota mensual: $2.500.-<br>Cuota anual: $20.000.-<br><br>¡GRACIAS!`;
  
  /** Imagen ilustrativa de la cooperadora */
  imagenCooperadora: string = '/assets/img/cooperadora.png';
}
