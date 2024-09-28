import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  @Input() timelineItems: TimelineItem[] = [];
}

export interface TimelineItem {
  iconClass: string;
  title: string;
  description: string[];
}