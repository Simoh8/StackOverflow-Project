import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/Services/User.service';
import { User } from 'src/app/Interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = [];

  constructor(private userService: UserService){

  }

  ngOnInit() {
    this.userService.getAllUser().subscribe((users)=>{
      this.users = users;
    })
  }

}
