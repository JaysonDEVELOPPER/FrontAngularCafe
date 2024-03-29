import { Router, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PanierComponent } from './panier/panier.component';
import { LoginComponent } from './authentificaion/login/login.component';
import { ProduitsComponent } from './produits/produits.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './authentificaion/register/register.component';
import { AdminpanelComponent } from './administration/adminpanel/adminpanel.component';
import { DetailsUserComponent } from './administration/details-user/details-user.component';
import { UpdateUserComponent } from './administration/update-user/update-user.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Commerce Accueil',
  },
  {
    path: 'panier',
    component: PanierComponent,
    title: 'Panier commande',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login commerce',
  },
  {
    path: 'enregistrement',
    component: RegisterComponent,
    title: "S'incrire Commerce",
  },
  {
    path: 'produits',
    component: ProduitsComponent,
    title: 'Produits Commerce',
  },
  {
    path: 'adminpanel',
    component: AdminpanelComponent,
    title: 'Administration',
  },
  {
    path: 'detailsUser/:id',
    component: DetailsUserComponent,
    title: 'User panel',
  },
  {
    path: 'updateUser/:nom/:prenom/:id',
    component: UpdateUserComponent,
    title: 'Mise a jours user',
  },
];
export default routes;
