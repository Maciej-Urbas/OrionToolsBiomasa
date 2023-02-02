import { Component } from '@angular/core';

import SwiperCore, {
  Keyboard,
  Pagination,
  Navigation,
  Virtual,
  SwiperOptions,
  Autoplay,
} from 'swiper';
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual, Autoplay]);

@Component({
  selector: 'app-recycle',
  templateUrl: './recycle.component.html',
  styleUrls: ['./recycle.component.css'],
})
export class RecycleComponent {
  constructor() {}

  recycleCaptions: Array<string> = [
    'PODKŁADKA PRZECIWNOŻA\nVECOPLAN VEZ 414X127,4X38 MM',
    'NÓŻ LINDNER KOMET\n172X57X28 MM, 2XM16 B',
    'NÓŻ LINDNER POLARIS\n172X77X38 MM B',
    'NÓŻ LINDNER JUPITER\n116,6X116,6X47 MM',
    'NÓŻ ROTORA ELDAN MPR\n399,7X101X69 MM ŚRODEK',
    'NÓŻ ROTORA ELDAN MPR\n399,7X101X69 MM SKRAJNY',
    'PRZECIWNÓŻ VECOPLAN\nV-ECO 414,2X117X28 MM',
    'NÓŻ OŚMIOKĄTNY VECOPLAN\nVEZ 60X60X30 MM B M18',
  ];

  recycleSwiperConfigSmall: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.card-buttons_right',
      prevEl: '.card-buttons_left',
    },
  };

  recycleSwiperConfigMedium: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: -60,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
  };

  recycleSwiperConfigLarge: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: -90,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
  };

  recycleUrl: string = 'https://www.oriontools.pl/pl_PL/offer';

  recycleLink(): void {
    const w = window.open(this.recycleUrl, '_blank');
    if (w) {
      w.focus();
    }
  }
}
