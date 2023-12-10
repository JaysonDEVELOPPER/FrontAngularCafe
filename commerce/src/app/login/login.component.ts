import { Component, inject } from '@angular/core';
import { Users } from '../interfaces/users';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PresentationComponent } from '../presentation/presentation.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HeaderComponent,FooterComponent,PresentationComponent,RouterLink],
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
  isPanelAdmin: boolean = false;
  isLoggedIn: boolean = false;
  tokenStock: any = { tokenStocks: ""}

  loginconnection() {
    this.response = '';
    this.usersService
      .login(this.applyForm.value.email, this.applyForm.value.password)
      .then((data) => {
        this.message = data.message;
        this.tokenStock = data.token;
        localStorage.setItem('token', data.token);
        
        // Vérifier si l'élément "token" existe dans le localStorage
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
          var base64Url = storedToken.split(".")[1];
          var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
          var jsonPayload = decodeURIComponent(
            window
              .atob(base64)
              .split("")
              .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
              })
              .join("")
          );
  
          const currentUser = JSON.parse(jsonPayload);
          console.log(currentUser)
          if (currentUser.role === "admin") {
            this.isPanelAdmin = true
          }
          this.isLoggedIn = true;
        } else {
          // Gérer le cas où l'élément "token" n'est pas présent dans le localStorage
        }
      });
  }
  

  logout() {
    localStorage.removeItem('token');
    this.response = { message: 'Bonne journée ! Merci de votre visite..' };
    this.message = '';
    this.isLoggedIn = false;
    this.isPanelAdmin = false
  }
}


