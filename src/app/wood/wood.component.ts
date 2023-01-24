import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-wood',
  templateUrl: './wood.component.html',
  styleUrls: ['./wood.component.css'],
})
export class WoodComponent {
  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    let woodCard = document.querySelectorAll('.wood-card');
    let woodCardBottonsLeft = document.querySelectorAll('.card-buttons_left');
    let woodCardBottonsRight = document.querySelectorAll('.card-buttons_right');
    if (woodCard != null) {
      console.log(window.innerWidth);
      if (window.innerWidth < 777) {
        woodCard[1].classList.remove('card-marginTop0');
        woodCard[1].classList.add('card-marginTop6vw');

        woodCard[2].classList.remove('card-displayFlex');
        woodCard[2].classList.add('card-displayNone');

        woodCardBottonsRight[0].classList.remove('card-displayNone');
        woodCardBottonsRight[0].classList.add('card-displayFlex');

        woodCardBottonsLeft[1].classList.remove('card-displayNone');
        woodCardBottonsLeft[1].classList.add('card-displayFlex');
      } else if (window.innerWidth >= 777 && window.innerWidth < 1281) {
        woodCard[1].classList.remove('card-marginTop6vw');
        woodCard[1].classList.add('card-marginTop0');

        woodCard[2].classList.remove('card-displayFlex');
        woodCard[2].classList.add('card-displayNone');

        woodCardBottonsLeft[1].classList.remove('card-displayFlex');
        woodCardBottonsLeft[1].classList.add('card-displayNone');

        woodCardBottonsRight[0].classList.remove('card-displayFlex');
        woodCardBottonsRight[0].classList.add('card-displayNone');

        woodCardBottonsRight[1].classList.remove('card-displayNone');
        woodCardBottonsRight[1].classList.add('card-displayFlex');
      } else {
        woodCard[1].classList.remove('card-marginTop6vw');
        woodCard[1].classList.add('card-marginTop0');

        woodCard[2].classList.remove('card-displayNone');
        woodCard[2].classList.add('card-displayFlex');

        woodCardBottonsLeft[0].classList.remove('card-displayNone');
        woodCardBottonsLeft[0].classList.add('card-displayFlex');
        woodCardBottonsLeft[1].classList.remove('card-displayFlex');
        woodCardBottonsLeft[1].classList.add('card-displayNone');
        woodCardBottonsLeft[2].classList.remove('card-displayFlex');
        woodCardBottonsLeft[2].classList.add('card-displayNone');

        woodCardBottonsRight[0].classList.remove('card-displayFlex');
        woodCardBottonsRight[0].classList.add('card-displayNone');
        woodCardBottonsRight[1].classList.remove('card-displayFlex');
        woodCardBottonsRight[1].classList.add('card-displayNone');
        woodCardBottonsRight[2].classList.remove('card-displayNone');
        woodCardBottonsRight[2].classList.add('card-displayFlex');
      }
    }
  }

  ngOnInit(): void {
    let woodCard = document.querySelectorAll('.wood-card');
    let woodCardBottonsLeft = document.querySelectorAll('.card-buttons_left');
    let woodCardBottonsRight = document.querySelectorAll('.card-buttons_right');
    if (woodCard != null) {
      if (window.innerWidth < 777) {
        woodCard[1].classList.remove('card-marginTop0');
        woodCard[1].classList.add('card-marginTop6vw');
        woodCard[2].classList.remove('card-displayFlex');
        woodCard[2].classList.add('card-displayNone');
      } else if (window.innerWidth >= 777 && window.innerWidth < 1281) {
        woodCard[1].classList.add('card-marginTop0');
        woodCard[1].classList.add('card-marginTop0');
        woodCard[2].classList.add('card-displayNone');
        woodCard[2].classList.add('card-displayNone');

        woodCardBottonsLeft[1].classList.remove('card-displayFlex');
        woodCardBottonsLeft[1].classList.add('card-displayNone');
        woodCardBottonsRight[0].classList.remove('card-displayFlex');
        woodCardBottonsRight[0].classList.add('card-displayNone');
      } else {
        woodCard[1].classList.remove('card-marginTop6vw');
        woodCard[1].classList.add('card-marginTop0');
        woodCard[2].classList.remove('card-displayNone');
        woodCard[2].classList.add('card-displayFlex');

        woodCardBottonsLeft[1].classList.remove('card-displayFlex');
        woodCardBottonsLeft[1].classList.add('card-displayNone');
        woodCardBottonsLeft[2].classList.remove('card-displayFlex');
        woodCardBottonsLeft[2].classList.add('card-displayNone');

        woodCardBottonsRight[0].classList.remove('card-displayFlex');
        woodCardBottonsRight[0].classList.add('card-displayNone');
        woodCardBottonsRight[1].classList.remove('card-displayFlex');
        woodCardBottonsRight[1].classList.add('card-displayNone');
      }
    }
  }
}
