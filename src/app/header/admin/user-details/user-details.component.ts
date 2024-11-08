import { Component, inject, Inject, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  // constructor(private userservice:UserService){

  // }
userservice= inject(UserService) // this is new of instaniging service like cosnstructor
selectedUser:User;
  ngOnInit(){
this.userservice.onUserDetailsClicked.subscribe((data:User)=>{
  this.selectedUser=data;
})
}

}