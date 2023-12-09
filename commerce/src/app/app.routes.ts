import { Router, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PanierComponent } from './panier/panier.component';
import { LoginComponent } from './login/login.component';
import { ProduitsComponent } from './produits/produits.component';
export const routes: Routes = [{
    path: '',
    component: AppComponent,
    title: "Commerce Accueil",
},
{
    path: 'panier/',
    component: PanierComponent,
    title: "Panier",
},
{
    path: 'login',
    component: LoginComponent,
    title: "Login commerce",
},
{
    path: 'produits',
    component: ProduitsComponent,
    title: "Produits Commerce",
},
];
export default routes;