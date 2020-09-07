import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { HomeRoutingModule } from './home_routing.module';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BannerComponent, HomeComponent],
  imports: [HomeRoutingModule, CommonModule, SharedModule],
})
export class HomeModule {}
