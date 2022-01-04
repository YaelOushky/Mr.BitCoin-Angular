import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';
import { loadUser } from '../services/UserService';
@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  user;
  contacts: Contact[];
  contacts$: Observable<Contact[]>;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.user = loadUser();
    if (!this.user.name) {
      this.router.navigateByUrl('login');
      return;
    }
    this.contactService.loadContacts();
    this.contacts$ = this.contactService.contacts$;
  }
  onDeleteContact($event) {
    this.contactService.deleteContact($event);
  }
}
