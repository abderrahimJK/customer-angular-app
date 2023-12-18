import {Component, OnInit} from '@angular/core';
import {SecurityService} from "./services/security.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'customer-angular-app';

    constructor(public securityService: SecurityService) {}

  ngOnInit(): void {

  }

  async login() {
    await this.securityService.kcService.login({
      redirectUri : window.location.origin
    })
  }

  logout() {
    this.securityService.kcService.logout();
  }
}
