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
  selector: 'app-steel',
  templateUrl: './steel.component.html',
  styleUrls: ['./steel.component.css'],
})
export class SteelComponent {
  constructor() {}

  steelCaptions: Array<string> = [
    'NÓŻ NOŻYCY 280X60X35\nMM VTN',
    'NÓŻ PRASONOŻYCY 450X140X60\nMM BONFIGLIOLI',
    'NÓŻ GILOTYNY PROSTY\n1040X55X20 MM DURMA',
    'NÓŻ GILOTYNY SKOŚNY\n1040X55X20 MM DURMA',
    'NÓŻ DO ŁAMACZA SZYN VTN\n170X170X45 MM',
    'NÓŻ PRASONOŻYC BONFIGLIOLI\n620X150X70 MM',
    'NÓŻ VTN 249X182/92,4/81/30\nMM',
    'NÓŻ VTN\n260X98X48 MM',
  ];

  steelSwiperConfigSmall: SwiperOptions = {
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

  steelSwiperConfigMedium: SwiperOptions = {
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

  steelSwiperConfigLarge: SwiperOptions = {
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
