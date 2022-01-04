import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { getUser } from '../services/UserService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user: any={
  _id: '',
  name: '',
  password: '',
  phone: '',
  email: '',
  coins: '',
  moves: [],
  isAdmin: false
}
  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.user);
    if(!this.user.name || !this.user.password) return
    getUser(this.user)
    this.router.navigateByUrl('/');
  }
}
