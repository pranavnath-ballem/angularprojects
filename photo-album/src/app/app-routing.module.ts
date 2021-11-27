import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
