import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';

import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  googleUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1444.1367593566285!2d6.9338476!3d43.6216658!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45a7a3004707303%3A0x13a41d8b7d62e57d!2sFlorine%20BENARD%20Ost%C3%A9opathe%20D.O.!5e0!3m2!1sfr!2suk!4v1717773565312!5m2!1sfr!2suk";
  sanitizedGoogleUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.sanitizedGoogleUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.googleUrl);
  }

  titleHelp = "Plus d'info :";
  titleHours = "Horaires d'ouvertures";
  titleContacts = "Contacts";
  titlePosition = "Position";

  @Input() contactList!: any[];
  ngOnInit() {};


  currentYear: number = new Date().getFullYear();
  currentDay: string = this.getCurrentDay();
  copyright = '2021' + ' - ' + this.currentYear + '. All rights reserved.';

  openingHours = [
    { day: 'Lundi', time: '10:00 - 19:00' },
    { day: 'Mardi', time: '10:00 - 19:00' },
    { day: 'Mercredi', time: 'Fermé' },
    { day: 'Jeudi', time: '10:00 - 19:00' },
    { day: 'Vendredi', time: '10:00 - 19:00' },
    { day: 'Samedi', time: '10:30 - 19:30' },
    { day: 'Dimanche', time: '10:00 - 12:00' },
  ];

  getCurrentDay(): string {
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const today = new Date().getDay();
    return days[today];
  }
}
