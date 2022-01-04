import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { loadUser } from '../services/UserService';
@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  contact: any = {
    _id: '',
    name: '',
    email: '',
    phone: '',
  };
  id:string
  user
  // contact: Contact

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router :Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.user = loadUser();
    if (!this.user.name) {
      this.router.navigateByUrl('login');
      return;
    }
    this.route.paramMap.subscribe((params) => {
     this.id = params.get('id?');
// console.log( this.contact._id );

    });
    console.log(this.contact);
    
    if (this.id === 'new') return
      var newContact = await this.contactService
        .getContactById(this.id)
        .toPromise();
      this.contact = newContact;
    
  }
  addContact() {
    console.log(this.contact);
    
    this.contactService.saveContact(this.contact)
    this.router.navigateByUrl('contact');
  }
}
