import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  @Input() contact :Contact
  @Output() onDelete = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
    // console.log(this.contact);
  }
  onDeleteContact(event){
    console.log('kk');
    
  this.onDelete.emit(this.contact._id)
  }


}
