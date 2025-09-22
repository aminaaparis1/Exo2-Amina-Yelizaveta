import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContactDataService } from '../services/contact-data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  styleUrls: ['./contact.scss'],
  standalone: true
})
export class Contact {
  @Input() formClass: string = 'p-3 border rounded shadow-sm';
  @Input() labelClass: string = 'form-label';
  @Input() inputClass: string = 'form-control mb-2';
  @Input() textareaClass: string = 'form-control mb-3';
  @Input() buttonClass: string = 'btn btn-primary w-100';
  @Input() formCheckClass: string = 'form-check mb-2';
  @Input() checkboxClass: string = 'form-check-input';
  @Input() checkboxLabelClass: string = 'form-check-label';
  @Input() checkboxLabel: string = 'Cacher Email';
  @Input() titre: string = 'text-center my-4';

  @Output() formSubmitted = new EventEmitter<any>();

  public formulaireContact: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactDataService,
    private router: Router
  ) {
    // formulaire
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

    if (cacher) {
      champEmail?.clearValidators();
      champEmail?.setValue('');
    } else {
      champEmail?.setValidators([Validators.required, Validators.email]);
    }
    champEmail?.updateValueAndValidity();
  }

  public envoyer() {
    if (this.formulaireContact.valid) {
      // sauvegarde dans le service
      this.contactService.setContact(this.formulaireContact.value);

      alert("Le formulaire est valide !");

      // redirection vers la page gestion
      this.router.navigate(['/accueil']);
    }
  }
}
