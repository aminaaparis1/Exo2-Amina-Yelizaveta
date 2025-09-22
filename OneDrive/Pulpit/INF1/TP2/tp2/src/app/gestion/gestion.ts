import {Component, Input} from '@angular/core';
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

  @Input() titreClass: string = 'text-center my-4';
  @Input() pClass: string = 'mb-2';
  @Input() errorClass: string = 'text-center text-danger';
  @Input() imgClass: string = 'img-fluid';
  @Input() imgStyle: any = { 'max-width': '400px', 'height': 'auto' };
  @Input() centre: string = "d-flex justify-content-center mt-3";

  constructor(private contactService: ContactDataService) {
    this.dernierContact = this.contactService.getContact();
  }
}
