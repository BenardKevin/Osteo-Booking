import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentFormComponent } from '../appointment-form/appointment-form.component';

@Component({
  selector: 'app-note-cards',
  standalone: true,
  imports: [],
  templateUrl: './note-cards.component.html',
  styleUrl: './note-cards.component.scss'
})
export class NoteCardsComponent {
  @ViewChild('myModal') modal!: ElementRef;
  @ViewChild('img01') modalImg!: ElementRef;
  @ViewChild('caption') captionText!: ElementRef;

  imgSrc: string = './assets/images/carte.jpg';
  imgAlt: string = 'Je prend RDV à domicile !';

  constructor(private dialog: MatDialog) { }

  openPopup(event: MouseEvent) {
    event.preventDefault();
    const dialogRef = this.dialog.open(AppointmentFormComponent, {
      disableClose: true,
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }

  openModal(img: HTMLImageElement) {
    this.imgSrc = img.src;
    this.modal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.modal.nativeElement.style.display = 'none';
  }
}
