import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
users:any;
resources:any;
  constructor(private dataUser:UsersService) {
    this.dataUser.getUsers();
  }

  ngOnInit(): void {
    this.users = this.dataUser.getUsers().subscribe(data => {this.users = data});
    this.resources = this.dataUser.getResources().subscribe(data => {this.resources = data});
  }

}
