import { CommonModule } from '@angular/common';
import { Component , inject } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Users } from '../interfaces/users';
import { Produits } from '../interfaces/produits';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-adminpanel',
  standalone: true,
  imports: [CommonModule, HeaderComponent,RouterLink],
  templateUrl: './adminpanel.component.html',
  styleUrl: './adminpanel.component.scss'
})
export class AdminpanelComponent {
  response: any = { message: '' };
  serviceUsers: UsersService = inject(UsersService);
  allUsers: Users[] = [];
  allProduits: Produits[] = [];
  

  constructor() {
    this.serviceUsers.getAllUsers().then((data) => {
      console.log(data)
      this.response = data.message
      this.allUsers = data.data;
    });
  }
}
