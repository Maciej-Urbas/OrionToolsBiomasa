import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './baner/baner.component';
import { AboutComponent } from './about/about.component';
import { WoodComponent } from './wood/wood.component';
import { SteelComponent } from './steel/steel.component';
import { RecycleComponent } from './recycle/recycle.component';
import { RegenComponent } from './regen/regen.component';

@NgModule({
  declarations: [AppComponent, BanerComponent, AboutComponent, WoodComponent, SteelComponent, RecycleComponent, RegenComponent],
  imports: [BrowserModule, CommonModule, SwiperModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
