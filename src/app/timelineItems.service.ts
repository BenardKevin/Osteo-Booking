import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  private timelineItems = [
        {
          iconClass: 'fa-graduation-cap',
          title: 'Dîplôme',
          description: [
            "Ostéopathe D.O. agréée par le ministère de la santé, diplômée de l'école Supérieure de l’Ostéopathie à Sophia Antipolis (formation sur 5 ans comprenant 5000 heures de cours théoriques et pratiques et intégrant un enseignement sur différentes techniques crâniennes, tissulaires et viscérales), avec une spécialisation de 1 an à l'école IS-OSTéO de Lyon."
          ]
        },
        {
          iconClass: 'fa-kit-medical',
          title: 'Soins de Qualité',
          description: [
            "Avec plusieurs centaines d’heures de pratique dont une année de pratique à Lyon dans diverses entreprises et EHPAD durant mon année de spécialisation. Je vous propose des séances d’ostéopathie adaptées à vos besoins."
          ]
        },
        {
          iconClass: 'fa-user-doctor',
          title: 'Déroulement d\'une séance',
          description: [
            "A votre domicile: Pour votre confort, je me déplace chez vous avec ma table ostéopathique.",
            "Au cabinet de Grasse, près de l'hopital.",
            "Une séance dure environ 45min. Pensez à vous munir de vos examens, si vous en avez."
          ]
        },
      ];
    

  constructor() {}

  getTimelineItems() {
    return this.timelineItems;
  }
}

export interface TimelineItem {
  iconClass: string;
  title: string;
  description: string[];
}