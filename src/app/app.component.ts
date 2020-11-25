import { Component } from '@angular/core';
import {FormControl, FormGroup, Validator} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularForms';

  contactForm = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    });
  name;
  surname;
  email;
  password;

  onSubmit() {
    this.name = this.contactForm.get('name').value;
    this.surname = this.contactForm.get('surname').value;
    this.email = this.contactForm.get('email').value;
    this.password = this.contactForm.get('password').value;
  }
}
