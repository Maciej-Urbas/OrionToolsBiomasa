import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-wood',
  templateUrl: './wood.component.html',
  styleUrls: ['./wood.component.css'],
})
export class WoodComponent {
  constructor() {}

  // @HostListener('window:resize', ['$event'])
  // onResize() {
  //   let woodCards = document.querySelector('.wood-cards');
  //   console.log(window.innerWidth);
  //   if (woodCards != null) {
  //     if (window.innerWidth < 777) {
  //       woodCards.classList.add('wood-cards-flexDirectionColumn');
  //       woodCards.classList.remove('wood-cards-flexDirectionRow');
  //     } else if (window.innerWidth >= 776 && window.innerWidth < 1200) {
  //       woodCards.classList.add('wood-cards-flexDirectionRow');
  //       woodCards.classList.remove('wood-cards-flexDirectionColumn');
  //     } else {
  //     }
  //   }
  // }

  ngOnInit(): void {
    let woodCard = document.querySelectorAll('.wood-card');
    if (woodCard != null) {
      console.log(woodCard);
      woodCard[1].classList.add('wood-card-marginTop');
      woodCard[2].classList.add('wood-card-displayNone');
    }
  }
}
