import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { StatisticPageComponent } from './statistic-page/statistic-page.component';

const routes: Routes = [{ path:'contact/details/:id', component:ContactDetailsComponent },
{ path:'contact/edit/:id?', component:ContactEditComponent },
{path:'', component:HomePageComponent},
{path:'contact', component:ContactPageComponent},
{path:'statistic', component:StatisticPageComponent},
{path:'login', component:LoginComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
