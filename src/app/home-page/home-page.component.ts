import { Component, OnInit } from '@angular/core';
import { loadUser } from '../services/UserService';
import { BitcoinService } from '../services/BitcoinService';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
user
bitcoin
  constructor(private bitcoinService:BitcoinService,private router :Router) { }

 async ngOnInit(): Promise<void> {
    this.user = loadUser()
    if(!this.user.name) {
      this.router.navigateByUrl('login');
      return
    } 
      
    this.bitcoin = await this.bitcoinService.getBitcoin().toPromise()
    
  }

}
