import { Injectable } from "@angular/core";

@Injectable()
export class SubscribeService{
    onSubscribeClicked(type:string) {
        // Added the use to database
        // send an emailwith subscribition details
        // allow the userto access the services
        alert('Thank you for subscribing '+type+' nd u can access the site now')
      }
    
}