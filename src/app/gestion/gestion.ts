import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDataService } from '../services/contact-service';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.html',
  imports: [CommonModule],
  styleUrls: ['./gestion.scss'], 
  standalone: true
})
export class Gestion {
  public dernierContact: Contact | null = null;

  public titleClass: string = 'text-center my-4';
  public notFoundTextClass: string = 'text-center';
  public notFoundContainerClass: string = 'd-flex justify-content-center mt-3';
  public notFoundImgClass: string = 'img-fluid w-25';
  public contactCardClass: string = 'srb-contact-card';


  constructor(private contactService: ContactDataService) {
    this.dernierContact = this.contactService.getContact();
  }
}
