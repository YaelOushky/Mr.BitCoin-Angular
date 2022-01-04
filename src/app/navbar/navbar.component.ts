import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { logout, loadUser } from '../services/UserService';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;

  constructor(private router :Router) {}

  ngOnInit(): void {
    console.log(loadUser().name);

    if (!loadUser().name) {
      this.isLogin = true;
    }
  }

  logout() {
    logout();
    this.isLogin = true;
    this.router.navigateByUrl('login');
  }
 
}
