import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CabinetsService {
  private cabinets = [
    {
      name: 'Cabinet à Grasse',
      address: '175 Chem. de la Tourache, 06130 Grasse',
      imageUrl: 'assets/images/cabinet_grasse.jpg',
      mapsLink: 'https://www.google.com/maps/place/Florine+BENARD+Ost%C3%A9opathe+D.O./@43.6216658,6.9338476,18z/data=!4m6!3m5!1s0x45a7a3004707303:0x13a41d8b7d62e57d!8m2!3d43.6215573!4d6.9345331!16s%2Fg%2F11qg080cnd?entry=ttu',
      reviewId: 'dc08f1ad-c65f-4b9b-ae7c-c48e2e04b9a2',
    },
    {
      name: 'Cabinet à Le Cannet',
      address: '2 Av. des Roches, 06110 Le Cannet',
      imageUrl: 'assets/images/cabinet_le-cannet.jpg',
      mapsLink: 'https://www.google.com/maps/place/2+Av.+des+Roches,+06110+Le+Cannet/',
      reviewId: '73ab641a-d979-4a73-b557-7cace49b069a',
      permanentlyClosed: true,
    },
  ];

  constructor() {}

  getCabinets() {
    return this.cabinets.filter(cabinet => !cabinet.permanentlyClosed);
  }
}
