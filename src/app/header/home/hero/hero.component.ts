import { Component } from '@angular/core';
import { SubscribeService } from '../../../services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  constructor(private subscribeService:SubscribeService){

  }

  onSubscribe() {
    // Added the use to database
    // send an emailwith subscribition details
    // allow the userto access the services
    this.subscribeService.onSubscribeClicked('Daily')

  }
}
