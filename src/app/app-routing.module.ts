import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './pages/book/book.component';
import { OrderComponent } from './pages/order/order.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroHomeComponent } from './components/hero/hero-home/hero-home.component';
import { HeroBookComponent } from './components/hero/hero-book/hero-book.component';
import { HeroOrderComponent } from './components/hero/hero-order/hero-order.component';
import { HeroContactComponent } from './components/hero/hero-contact/hero-contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book', component: BookComponent },
  { path: 'order', component: OrderComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'hero-home', component: HeroHomeComponent },
  { path: 'hero-book', component: HeroBookComponent },
  { path: 'hero-order', component: HeroOrderComponent },
  { path: 'hero-contact', component: HeroContactComponent },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
