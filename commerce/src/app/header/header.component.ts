import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  getToken: string | null;

  constructor(
    
  ) {
    // Récupérer le token du localStorage lors de la création du composant
    this.getToken = localStorage.getItem('token');

  }
  
  // Ajoutez d'autres méthodes ou logique liée à l'en-tête ici

}