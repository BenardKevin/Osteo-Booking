import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts = [
    {
      icon: 'fab fa-whatsapp',
      label: 'WhatsApp',
      link: 'https://wa.me/33651171266',
      text: '06 51 17 12 66',
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      link: 'mailto:florine.benard.osteo@free.fr',
      text: 'florine.benard.osteo@free.fr',
    },
    {
      icon: 'fab fa-facebook',
      label: 'Facebook',
      link: 'https://www.facebook.com/florineb.osteo',
      text: 'florineb.osteo',
    },
    {
      icon: 'fab fa-facebook-messenger',
      label: 'Messenger',
      link: 'https://m.me/florineb.osteo',
      text: 'florineb.osteo',
    },
    {
      icon: 'fab fa-instagram',
      label: 'Instagram',
      link: 'https://www.instagram.com/florine_osteo',
      text: 'florine_osteo',
    },
    {
      icon: 'fa fa-user-doctor',
      label: 'Doctolib',
      link: 'https://www.doctolib.fr/osteopathe/grasse/florine-benard',
      text: 'florine-benard',
    },
  ];

  constructor() {}

  getContacts() {
    return this.contacts;
  }
}
