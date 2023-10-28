import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AboutComponent } from './component/pages/about/about.component';
import { PortfolioComponent } from './component/pages/portfolio/portfolio.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/pages/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { ServicesComponent } from './component/pages/services/services.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { StyleSwicherComponent } from './component/UI/style-swicher/style-swicher.component';
import { SwicherLangComponent } from './component/UI/swicher-lang/swicher-lang.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    StyleSwicherComponent,
    SwicherLangComponent
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
    ,HttpClientModule
    ,TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
