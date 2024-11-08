export class User{
    //useing this constructor we can create new user
    constructor(name:string,gender:string,subType:string,status:string){

        this.name=name;
        this.gender=gender;
        this.subType=subType;
        this.status= status;
    }

    name:string;
    gender:string;
    subType:string;
    status:string
}