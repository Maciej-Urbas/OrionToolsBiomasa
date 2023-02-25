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
    'SHEAR BLADE 280X60X35\nMM VTN',
    'SHEAR BLADE 450X140X60\nMM BONFIGLIOLI',
    'GUILOTINE KNIFE STRAIGHT\n1040X55X20 MM DURMA',
    'GUILOTINE KNIFE MITER\n1040X55X20 MM DURMA',
    'RAIL BRAKER SZYN VTN\n170X170X45 MM',
    'SHEAR BLADE BONFIGLIOLI\n620X150X70 MM',
    'KNIFE VTN\n249X182/92,4/81/30 MM',
    'KNIFE VTN\n260X98X48 MM',
  ];

  steelSwiperConfigSmall1: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.steel-card-buttons_right1',
      prevEl: '.steel-card-buttons_left1',
    },
  };
  steelSwiperConfigSmall2: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.steel-card-buttons_right2',
      prevEl: '.steel-card-buttons_left2',
    },
  };

  steelSwiperConfigMedium: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: -60,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
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
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      clickable: true,
    },
    navigation: true,
  };

  steelUrl: string = 'https://www.oriontools.pl/pl_PL/offer';

  steelLink(): void {
    const w = window.open(this.steelUrl, '_blank');
    if (w) {
      w.focus();
    }
  }
}
