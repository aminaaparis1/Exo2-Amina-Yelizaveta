import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  imports:[ReactiveFormsModule, CommonModule],
  styleUrls: ['./contact.scss']
})
export class Contact {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      age: [''],
      hideEmail: [false],
      email: ['', [Validators.required, Validators.email]],
      commentaire: ['', Validators.required]
    });

    this.contactForm.get('hideEmail')?.valueChanges.subscribe(val => {
      const emailCtrl = this.contactForm.get('email');
      if (val) {
        emailCtrl?.clearValidators();
        emailCtrl?.setValue('');
      } else {
        emailCtrl?.setValidators([Validators.required, Validators.email]);
      }
      emailCtrl?.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      alert('Le formulaire est valide');
      //apres ici ajouter la redirection vers accueil
    }
  }


}
