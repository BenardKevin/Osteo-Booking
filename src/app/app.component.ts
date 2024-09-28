import { Component, Renderer2, RendererFactory2, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { CabinetsService } from './cabinets.service';
import { TimelineService } from './timelineItems.service';
import { HeaderService } from './header.service';
import { ContactsService } from './contacts.service';

import { CabinetComponent } from './cabinet/cabinet.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleReviewsComponent } from './google-reviews/google-reviews.component';
import { HeaderComponent } from './header/header.component';
import { NoteCardsComponent } from './note-cards/note-cards.component';
import { ResumeComponent } from './resume/resume.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    CabinetComponent,
    CalendarComponent,
    FooterComponent,
    GoogleReviewsComponent,
    NoteCardsComponent,
    ResumeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  };
  cabinets: any[];
  contacts: any[];
  doctolibButton: any[];
  homeButton: any[];
  phoneButton: any[];
  timelineItems: any[];
  private renderer: Renderer2;

  constructor(private cabinetsService: CabinetsService, 
    private contactsService: ContactsService, 
    private headerService: HeaderService, 
    private timelineService: TimelineService,
    private rendererFactory: RendererFactory2,
    @Inject(PLATFORM_ID) private platformId: any) {

    this.cabinets = this.cabinetsService.getCabinets();
    this.contacts = this.contactsService.getContacts();
    this.doctolibButton = this.headerService.getDoctolibButton();
    this.homeButton = this.headerService.getHomeButton();
    this.phoneButton = this.headerService.getPhoneButton();
    this.timelineItems = this.timelineService.getTimelineItems();
    this.renderer = rendererFactory.createRenderer(null, null);
  };

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadCSS('./assets/css/bootstrap.min.css');
      this.loadCSS('./assets/css/fontawesome.min.css');
    }
  }

  loadCSS(url: string) {
    const link: HTMLLinkElement = this.renderer.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    this.renderer.appendChild(document.head, link);
  }
}
