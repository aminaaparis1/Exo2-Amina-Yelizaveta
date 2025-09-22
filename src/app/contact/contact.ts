import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { ContactDataService } from '../services/contact-service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, NgClass]
})
export class Contact {
  public containerClass: string = 'srb-container';
  public formClass: string = 'srb-form card-flat';
  public titleClass: string = 'title-blue text-center my-4';
  public labelClass: string = 'srb-label';
  public inputClass: string = 'srb-control mb-2';
  public textareaClass: string = 'srb-control mb-3';
  public checkboxRowClass: string = 'd-flex align-items-center gap-2 mb-2';
  public checkboxInputClass: string = 'srb-checkbox';
  public checkboxLabelClass: string = 'srb-label m-0';
  public submitClass: string = 'btn-gold w-100';


  public formulaireContact: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactDataService,
    private router: Router
  ) {
    this.formulaireContact = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      age: [''],
      cacherEmail: [false],
      email: ['', [Validators.required, Validators.email]],
      commentaire: ['', Validators.required]
    });
  }

  public basculerEmail() {
    const cacher = this.formulaireContact.get('cacherEmail')?.value;
    const champEmail = this.formulaireContact.get('email');
    if (!champEmail) return;

    if (cacher) {
      champEmail.clearValidators();
      champEmail.setValue('');
    } else {
      champEmail.setValidators([Validators.required, Validators.email]);
    }
    champEmail.updateValueAndValidity();
  }

  public envoyer() {
    if (this.formulaireContact.valid) {

      this.contactService.setContact(this.formulaireContact.value);
      alert('Le formulaire est valide !'); 
      this.router.navigate(['/accueil']);  
    }
  }
}
