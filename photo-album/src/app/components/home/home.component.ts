import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carouselImages;
  selectedItem;

  constructor(service: HomeService) {
    this.carouselImages = service.getCarouselImages();
    this.selectedItem = this.carouselImages[0];
  }

  isImgsActive(imgs: Object){
    if(this.selectedItem === imgs)
      return true
    else
      return false
    
    // return this.selectedItem === imgs;
  }

  ngOnInit(): void {
  }

}
