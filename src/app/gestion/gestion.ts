import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDataService } from '../services/contact-data';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.html',
  imports: [CommonModule],
  styleUrls: ['./gestion.scss'],
  standalone: true
})
export class Gestion {
  public dernierContact: any = null;

  constructor(private contactService: ContactDataService) {
    this.dernierContact = this.contactService.getContact();
  }
}