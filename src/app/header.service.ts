import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private doctolibButton: any = {
    title: 'RDV dans mon cabinet',
    link: 'https://www.doctolib.fr/osteopathe/grasse/florine-benard',
    iconClass: 'logo_doctolib',
    iconLink: './assets/images/logo_doctolib.svg',
    color: 'blue',
};
private homeButton: any = {
  title: 'RDV à votre domicile',
  link: 'https://fbosteo.simplybook.it/v2/?widget-type=iframe&theme=creative&theme=creative&timeline=modern&datepicker=top_calendar#book/count/1/',
  iconClass: 'home',
  color: 'green',
};
private phoneButton: any = {
  title: '06 51 17 12 66',
  link: 'tel:+33651171266',
  iconClass: 'phone',
  color: 'yellow',
};

  constructor() {}

  getDoctolibButton() {
    return this.doctolibButton;
  }
  getHomeButton() {
    return this.homeButton;
  }
  getPhoneButton() {
    return this.phoneButton;
  }
}
