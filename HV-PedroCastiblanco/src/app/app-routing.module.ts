import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/pages/about/about.component';
import { PortfolioComponent } from './component/pages/portfolio/portfolio.component';
import { HomeComponent } from './component/pages/home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: "full"}
  , {path: '**', redirectTo: "home", pathMatch: "full"}
  , {path: 'home', component: HomeComponent}
  , {path: 'about', component: AboutComponent}
  , {path: 'portfolio', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
  ,exports: [RouterModule]
})
export class AppRoutingModule { }
