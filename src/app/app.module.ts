import { AdminModule } from './admin/admin.module';
import { ContactsModule } from './contactss/contacts.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,



    PageNotFoundComponent,

    LayoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, CoreModule, BrowserAnimationsModule,AdminModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
