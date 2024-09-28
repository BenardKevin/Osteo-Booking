import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() doctolibButton!: any;
  @Input() homeButton!: any;
  @Input() phoneButton!: any;
  ngOnInit() {};
  headerTitle: string = 'Florine Bénard Ostéopathe D.O.';
  headerSubtitle: string = 'Ostéopathe à Grasse, et séances à votre domicile';
}
