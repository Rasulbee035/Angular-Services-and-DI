import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./logger.service";


 //tell to angular what to inject in service we have special metadata @injectable
 @Injectable() // tell an angular something is injected to service class
 export class UserService{
    users:User[]=[
        new User('stev 3','male','mothly','active'),
        new User('stev 1','male','quatrly','Inactive'),
        new User('stev 2','female','yealy','active'),
    ];

    constructor(private logger:LoggerService){

    }
    getAllUsers(){
        return this.users;
    }
    onUserDetailsClicked:EventEmitter<User> = new EventEmitter<User>();
    
    userClickedList(user){
        this.onUserDetailsClicked.emit(user)
    }

    createUser(name:string,gender:string,subtype:string,status:string){
        let newUser= new User(name,gender,subtype,status);
        this.users.push(newUser);//  using push add new users in array
        // let logmsg=new LoggerService(); // this not good way to create an service
        this.logger.logMesage(name,status);

    }

}