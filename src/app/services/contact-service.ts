import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {
  private lastContact: Contact | null = null;

  public setContact(data: Contact) {
    this.lastContact = data;
  }

  public getContact(): Contact | null {
    return this.lastContact;
  }
}
