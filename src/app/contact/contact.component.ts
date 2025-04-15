import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';



@Component({
  selector: 'app-contact',
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    user_name: '',
    user_email: '',
    message: ''
  };

  isSubmitting = false;

  sendEmail(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched(); // Force validation messages to show
      return;
    }

    this.isSubmitting = true;

    emailjs.send(
      'service_fpby1m9',
      'template_yjdzsu4',
      this.formData,
      'O92R2doiUaizJ5Wwr'
    ).then((result: EmailJSResponseStatus) => {
      console.log('SUCCESS!', result.status, result.text);
      alert('Message sent successfully!');

      form.resetForm(); // Reset both form state and data
      this.formData = { user_name: '', user_email: '', message: '' };
    }).catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send message. Please try again later.');
    }).finally(() => {
      this.isSubmitting = false;
    });
}
}
