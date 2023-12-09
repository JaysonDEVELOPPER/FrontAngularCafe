import { Component, inject } from '@angular/core';
import { Users } from '../interfaces/users';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  response: any = { message: '' };
  usersService: UsersService = inject(UsersService);
  message: string = '';
  applyForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  isLoggedIn: boolean = false;
  

  loginconnection() {
    this.response = '';
    this.usersService
      .login(this.applyForm.value.email, this.applyForm.value.password)
      .then((data) => {
        console.log(data);
        this.message = data.message;
        localStorage.setItem('token', data.token);

        // Mettez à jour l'état de connexion après une connexion réussie
        this.isLoggedIn = true;
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.response = { message: 'Bonne journée ! Merci de votre visite..' };
    this.message = '';
    this.isLoggedIn = false;
  }
}


