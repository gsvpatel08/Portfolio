import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';



@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    user_name: '',
    user_email: '',
    message: ''
  };

  sendEmail() {
    emailjs.send(
      'service_fpby1m9',       // Replace with your EmailJS service ID
      'template_yjdzsu4',      // Replace with your EmailJS template ID
      this.formData,
      'O92R2doiUaizJ5Wwr'        // Replace with your EmailJS public key
    ).then((result: EmailJSResponseStatus) => {
      console.log('SUCCESS!', result.status, result.text);
      alert('Message sent successfully!');
      this.formData = { user_name: '', user_email: '', message: '' }; // Reset form
    }, (error) => {
      console.error('FAILED...', error);
      alert('Failed to send message. Try again later.');
    });
  }

}
