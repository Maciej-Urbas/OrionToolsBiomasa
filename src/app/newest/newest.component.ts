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
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css'],
})
export class NewestComponent {
  constructor() {}

  newestCaptions: Array<string> = [
    'NÓŻ DO RĘBAKA VEISTO\n86X30X10 MM',
    'ŚRUBA SPECIALNA KOMPTECH\nCRAMBO M20X70',
    'NÓŻ PRASONOŻYC LOURITEX\n410X120X50 MM',
    'BELKA PRZEDCIWNOŻA LINDNER\nPOWERKOMET/KOMET 2800',
    'DOCISK NOŻA LINDNER POLARIS\n344X223X72 MM R',
    'DOCISK NOŻA LINDNER POLARIS\n344X223X72 MM ŚR.',
    'SITO LINDNER POLARIS\n841/793X340X25 MM HEX50 MM',
    'NÓŻ GETECHA\n1220X79X23 MM',
  ];

  newestSwiperConfigSmall: SwiperOptions = {
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

  newestSwiperConfigMedium: SwiperOptions = {
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

  newestSwiperConfigLarge: SwiperOptions = {
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
}
