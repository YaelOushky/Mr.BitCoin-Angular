import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { addMoveUser, loadUser } from '../services/UserService';
@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss'],
})
export class TransferFundComponent implements OnInit {
  amount: '';
  errors: {};
  @Input() contact :Contact
  constructor() {}

  ngOnInit(): void {}
  onSend(){
    console.log(this.amount);
    addMoveUser(this.contact,this.amount,loadUser())
  }
}
