import { Component, Inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',

})
export class UserListComponent {
  users;
  constructor(private userService:UserService){
    this.users =this.userService.getAllUsers();
  }


  //On clickbutton need o call service file to emit an event
  showUserDetails(user:User){
    this.userService.userClickedList(user);
  }

  
}
