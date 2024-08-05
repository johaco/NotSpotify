import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { LogInComponent } from './components/logIn/log-in/log-in.component';
import { SignInComponent } from './components/signIn/sign-in/sign-in.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'log-in', component: LogInComponent},
  { path: 'artist/:id', component: ArtistComponent},
  { path: '', pathMatch:'full', redirectTo: 'home'},
  { path: '**', pathMatch:'full', redirectTo: 'home'}
];
