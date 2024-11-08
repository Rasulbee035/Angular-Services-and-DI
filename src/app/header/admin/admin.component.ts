import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  
  constructor(private userService:UserService){

  }
  name:string=''
  Subtype:string='yearly'
  gender:string ='male'
  status:string='active'

  createNewUsers(){
this.userService.createUser(this.name,this.gender,this.Subtype,this.status);
console.log(this.userService.users)
  }
}
