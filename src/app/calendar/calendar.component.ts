import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit() {
    const script = this.renderer2.createElement('script');
    script.src = '././assets/scripts/booking_widget.js';
    this.renderer2.appendChild(this._document.body, script);
  }
}
