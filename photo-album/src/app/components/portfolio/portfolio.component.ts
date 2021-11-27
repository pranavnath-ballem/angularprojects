import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/app.utility';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  images;
  selectedIndex:number;
  
  constructor(service: PortfolioService) {
    this.images = service.getPortfolioImages();
    this.images = Utils.shuffleArray(this.images);
    this.selectedIndex = -1;
  }

  ngOnInit(): void {
  }

  imageOnClick(i:any):void{
    if(this.selectedIndex != -1)
      this.selectedIndex = -1
    else
      this.selectedIndex = i;
  }

}
