import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabinet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabinet.component.html',
  styleUrl: './cabinet.component.scss',
})
export class CabinetComponent implements OnInit {
  @Input() cabinetList!: any[];
  ngOnInit() {};
}
