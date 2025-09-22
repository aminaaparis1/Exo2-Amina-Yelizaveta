import { Component, Input } from '@angular/core';
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

  @Input() titleClass: string = 'text-center my-4';
  @Input() notFoundTextClass: string = 'text-center';
  @Input() notFoundContainerClass: string = 'd-flex justify-content-center mt-3';
  @Input() notFoundImgClass: string = 'img-fluid w-25';

  constructor(private contactService: ContactDataService) {
    this.dernierContact = this.contactService.getContact();
  }
}
