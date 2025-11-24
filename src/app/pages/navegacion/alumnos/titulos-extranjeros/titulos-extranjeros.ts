/**
 * Componente TitulosExtranjeros - Convalidación de títulos secundarios extranjeros
 * 
 * Desarrollé esta página para guiar a estudiantes extranjeros o argentinos
 * que cursaron el secundario en otro país sobre el trámite de convalidación
 * de su título para poder inscribirse en el IFTS N°26.
 * 
 * El proceso de convalidación es requisito obligatorio del Ministerio de
 * Educación para que títulos extranjeros tengan validez en Argentina.
 * 
 * Información incluida:
 * - Pasos del trámite de convalidación
 * - Legalización y apostilla
 * - Traducción oficial si corresponde
 * - Documentación requerida
 * - Enlaces al Ministerio de Educación CABA
 * 
 * @author Marcos - IFTS N°26
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

/**
 * Interfaz que define un paso del trámite de convalidación
 * 
 * @property numero - Número de orden del paso
 * @property titulo - Nombre descriptivo del paso
 * @property descripcion - Explicación detallada del paso
 */
interface PasoConvalidacion {
  numero: number;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-titulos-extranjeros',
  imports: [CommonModule, PageBannerComponent],
  templateUrl: './titulos-extranjeros.html',
  styleUrl: './titulos-extranjeros.scss'
})
export class TitulosExtranjeros {
  /**
   * Descripción general del trámite de convalidación
   * 
   * Explico brevemente qué es la convalidación y para qué sirve,
   * para que los estudiantes extranjeros entiendan la importancia
   * de este trámite previo a la inscripción.
   */
  descripcion: string = 'Si tenés un título secundario obtenido en el extranjero, podés realizar el trámite de convalidación para ingresar a una carrera de nivel superior en Argentina.';

  /**
   * Pasos del trámite de convalidación
   * 
   * Estructuré una guía paso a paso del proceso completo: desde la legalización
   * en el país de origen hasta la presentación en Bedelía del IFTS con el
   * certificado de convalidación emitido por el Ministerio.
   */
  pasos: PasoConvalidacion[] = [
    {
      numero: 1,
      titulo: 'Legalización del Título',
      descripcion: 'El título debe estar legalizado por el Ministerio de Relaciones Exteriores del país de origen y por el Consulado Argentino correspondiente (Apostilla de La Haya si aplica).'
    },
    {
      numero: 2,
      titulo: 'Traducción Oficial',
      descripcion: 'Si el título no está en español, debe ser traducido por un Traductor Público Nacional matriculado en Argentina.'
    },
    {
      numero: 3,
      titulo: 'Presentación en el Ministerio',
      descripcion: 'Presentá la documentación ante el Ministerio de Educación de la Ciudad de Buenos Aires para iniciar el trámite de convalidación.'
    },
    {
      numero: 4,
      titulo: 'Certificado de Convalidación',
      descripcion: 'Una vez aprobado, el Ministerio emitirá un certificado que acredita la validez de tu título secundario en Argentina.'
    },
    {
      numero: 5,
      titulo: 'Inscripción en el IFTS',
      descripcion: 'Con el certificado de convalidación, podés completar tu inscripción en el IFTS N°26 presentándolo en Bedelía.'
    }
  ];

  /**
   * Lista completa de documentos requeridos
   * 
   * Enumero todos los documentos que el estudiante debe presentar
   * ante el Ministerio de Educación para iniciar el trámite de
   * convalidación de su título secundario extranjero.
   */
  documentosRequeridos: string[] = [
    'Título secundario original y copia',
    'Legalización del Ministerio de Relaciones Exteriores del país de origen',
    'Legalización del Consulado Argentino (o Apostilla de La Haya)',
    'Traducción oficial si el título no está en español',
    'Documento de identidad (pasaporte o DNI argentino)',
    'Certificado analítico de estudios secundarios'
  ];

  /**
   * Enlace al Ministerio de Educación CABA
   * 
   * URL oficial donde los estudiantes pueden obtener más información
   * sobre el trámite de convalidación y gestionar su solicitud.
   */
  enlaceMinisterio: string = 'https://www.buenosaires.gob.ar/educacion';
}
