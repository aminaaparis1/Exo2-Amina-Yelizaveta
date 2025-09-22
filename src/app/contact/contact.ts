import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { ContactDataService } from '../services/contact-data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'], // peut rester minimal
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, JsonPipe, NgClass]
})
export class Contact {
  // Inputs simples pour le style (peu nombreux)
  @Input() containerClass: string = 'srb-container';
  @Input() formClass: string = 'srb-form card-flat';
  @Input() titleClass: string = 'title-blue text-center my-4';
  @Input() submitClass: string = 'btn-gold w-100';

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
      // ✅ on conserve la sauvegarde dans le service (pour Gestion)
      this.contactService.setContact(this.formulaireContact.value);
      alert('Le formulaire est valide !'); // ✅ alerte demandée
      this.router.navigate(['/accueil']);  // ✅ redirection vers l’accueil
    }
  }
}
