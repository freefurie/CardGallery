import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardSummaryComponent } from './card-summary/card-summary.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CardListComponent },
  { path: 'list', component: CardListComponent },
  { path: 'list/summary/:id', component: CardSummaryComponent },
  { path: 'admin', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
