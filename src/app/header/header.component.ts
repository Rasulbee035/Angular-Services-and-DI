import { Component } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private subscribeService:SubscribeService){

  }

  selectedTab: string = 'home'
  homeClicked() {
    this.selectedTab = 'home';
  }
  adminClicked() {
    this.selectedTab = 'admin';
    
  }
  onSubscribe(){
    this.subscribeService.onSubscribeClicked("monthly");
  }

 
}
