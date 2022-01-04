import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';
import { loadUser } from '../services/UserService';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  contact: any;
  id;
  moves;
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');

      console.log(this.id);
    });
    this.contact = await this.contactService
      .getContactById(this.id)
      .toPromise();
      this.loadMove()
  }
  loadMove = () => {
    var userMoves = loadUser().moves;
    this.moves = userMoves.filter((move) => move.to._id === this.contact._id);
  };
}
