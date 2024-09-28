import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.scss'
})
export class AppointmentFormComponent {
  appointmentForm: FormGroup;
  phoneRegex = /^\+?\d{0,13}$/;

  constructor(
    public dialogRef: MatDialogRef<AppointmentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) {
    this.appointmentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.phoneRegex)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submitForm(): void {
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value);
    } else {
      this.markAllAsTouched(this.appointmentForm);
    }
  }

  markAllAsTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      }
    });
  }
}
