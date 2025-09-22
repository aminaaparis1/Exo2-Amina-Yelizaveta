import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {
  private lastContact: any = null;

  setContact(data: any) {
    this.lastContact = data;
  }

  getContact() {
    return this.lastContact;
  }
}