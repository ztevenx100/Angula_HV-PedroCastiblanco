import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/pages/about/about.component';
import { PortfolioComponent } from './component/pages/portfolio/portfolio.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/pages/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { ServicesComponent } from './component/pages/services/services.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { StyleSwicherComponent } from './component/style-swicher/style-swicher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ServicesComponent,
    ContactComponent,
    StyleSwicherComponent
  ],
  imports: [
    BrowserModule
    ,RouterModule.forRoot([
      {path: '', redirectTo: "/home", pathMatch: "full"}
    // , {path: '**', redirectTo: "/home", pathMatch: "full"}
    , {path: 'home', component: HomeComponent}
    , {path: 'about', component: AboutComponent}
    , {path: 'services', component: ServicesComponent}
    , {path: 'portfolio', component: PortfolioComponent}
    , {path: 'contact', component: ContactComponent}
    ])
    ,NgxTypedJsModule
    ,BrowserAnimationsModule
    ,TooltipModule.forRoot()
    ,BsDropdownModule.forRoot()
    ,CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
