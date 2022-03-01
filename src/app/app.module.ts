import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './pages/book/book.component';
import { OrderComponent } from './pages/order/order.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroHomeComponent } from './components/hero/hero-home/hero-home.component';
import { HeroBookComponent } from './components/hero/hero-book/hero-book.component';
import { HeroOrderComponent } from './components/hero/hero-order/hero-order.component';
import { HeroContactComponent } from './components/hero/hero-contact/hero-contact.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { IntroComponent } from './components/intro/intro.component';
import { parallaxComponent } from './components/parallax/parallax.component';
import { TeamComponent } from './components/team/team.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    OrderComponent,
    ContactComponent,
    NavbarComponent,
    HeroHomeComponent,
    HeroBookComponent,
    HeroOrderComponent,
    HeroContactComponent,
    TestimonialsComponent,
    IntroComponent,
    parallaxComponent,
    TeamComponent,
    FooterComponent,
    HeaderComponent,
    PagenotfoundComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
