import { Routes } from '@angular/router';
import { HomeComponent } from './compnents/home/home.component';
import { SearchComponent } from './compnents/search/search.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: '', pathMatch:'full', redirectTo: 'home'},
  { path: '**', pathMatch:'full', redirectTo: 'home'}
];
