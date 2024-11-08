import { Component } from '@angular/core';
import { SubscribeService } from '../../../services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private subscribeService:SubscribeService){

  }
  onSubscribe() {
    // Added the use to database
    // send an emailwith subscribition details
    // allow the userto access the services
this.subscribeService.onSubscribeClicked('Yearly')
  }
}
