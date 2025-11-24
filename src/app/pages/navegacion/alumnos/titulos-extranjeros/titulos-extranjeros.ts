import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../../../../components/page-banner/page-banner';

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
  // Información general
  descripcion: string = 'Si tenés un título secundario obtenido en el extranjero, podés realizar el trámite de convalidación para ingresar a una carrera de nivel superior en Argentina.';

  // Pasos del trámite
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

  // Documentación requerida
  documentosRequeridos: string[] = [
    'Título secundario original y copia',
    'Legalización del Ministerio de Relaciones Exteriores del país de origen',
    'Legalización del Consulado Argentino (o Apostilla de La Haya)',
    'Traducción oficial si el título no está en español',
    'Documento de identidad (pasaporte o DNI argentino)',
    'Certificado analítico de estudios secundarios'
  ];

  // Información de contacto
  enlaceMinisterio: string = 'https://www.buenosaires.gob.ar/educacion';
}
