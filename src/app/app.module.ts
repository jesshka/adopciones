import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-views/main-layout/main-layout.component';
import { HomeComponent } from './main-views/home/home.component';
import { BreedListComponent } from './main-views/breed-list/breed-list.component';
import { AdoptionsComponent } from './main-views/adoptions/adoptions.component';
import { ContactUsComponent } from './main-views/contact-us/contact-us.component';
import { AdoptionDetailComponent } from './main-views/adoptions/adoption-detail/adoption-detail.component';
import { BreedDetailComponent } from './main-views/breed-list/breed-detail/breed-detail.component';
import { AdoptionFormComponent } from './main-views/adoptions/adoption-form/adoption-form.component';
import { Page404Component } from './main-views/page404/page404.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeComponent,
    BreedListComponent,
    AdoptionsComponent,
    ContactUsComponent,
    AdoptionDetailComponent,
    BreedDetailComponent,
    AdoptionFormComponent,
    Page404Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
