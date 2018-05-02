import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  user: any;
  users: any;
  isLoged: boolean;

  constructor() { }

  ngOnInit() {
  }
  logout() {
    this.user = null;
    this.users = null;
    this.isLoged = false;
    // this.auth.logout();
  }

  ngOnDestroy() {
    this.user = null;
    this.users = null;
    this.isLoged = false;
  }
}
