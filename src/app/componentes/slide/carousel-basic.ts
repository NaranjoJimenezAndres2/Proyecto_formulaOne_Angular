import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-carousel-basic', 
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class NgbdCarouselBasic {
  images = ['./assets/img/alpilogo1.png', './assets/img/ferlogo.png', './assets/img/LogoMer1.png']
}

/* <div class="carousel-caption">
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>*/