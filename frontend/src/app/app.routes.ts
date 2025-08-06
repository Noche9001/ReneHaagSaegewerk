import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UeberMichComponent } from './components/ueber-mich/ueber-mich.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // HOME
  { path: 'home', component: HomeComponent },
  // LEISTUNGEN
  { path: 'leistungen/lohnschnitt', component: HomeComponent },
  { path: 'leistungen/holzhandel', component: HomeComponent },
  // PRODUKTE
  { path: 'produkte/schnittholz', component: HomeComponent },
  { path: 'produkte/zweitewahl', component: HomeComponent },
  { path: 'produkte/brennholz', component: HomeComponent },
  { path: 'produkte/sonstiges', component: HomeComponent },
  // UNTERNEHMEN
  { path: 'unternehmen/uebermich', component: UeberMichComponent },
  { path: 'unternehmen/galerie', component: GalleryComponent },
  // KONTAKT
  { path: 'kontakt', component: ContactComponent },
  // { path: '**', redirectTo: 'home' },
];
