import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './../home/home_routing.module';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
    // HomeRoutingModule,
    // AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent

  ]
})
export class SharedModule { }
