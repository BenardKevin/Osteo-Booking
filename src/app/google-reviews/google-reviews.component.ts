import { DOCUMENT, CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-google-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-reviews.component.html',
  styleUrl: './google-reviews.component.scss',
})
export class GoogleReviewsComponent implements OnInit {
  title = 'Évaluations Google';

  @Input() cabinetList!: any[];
  reviewSize: number = 0;


  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
  ) {}

  ngOnInit(): void {
    const script = this.renderer2.createElement('script');
    script.src = 'https://apps.elfsight.com/p/platform.js';
    script.defer = true;
    this.renderer2.appendChild(this._document.body, script);
    
    if (this.cabinetList && Array.isArray(this.cabinetList)) {
      if (this.cabinetList.length > 1) {
        this.cabinetList.forEach(cabinet => {
          cabinet.reviewSize = 6;
        });
        if (this.cabinetList.length % 2 !== 0) {
          this.cabinetList[this.cabinetList.length - 1].reviewSize = 14;
        }
      } else {
        this.reviewSize = 14;
      }
    } else {
      console.error('Invalid cabinetList:', this.cabinetList);
    }
  }
}
