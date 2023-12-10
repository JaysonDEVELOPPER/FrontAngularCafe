import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HeaderComponent,FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  response: any = {message: ''};
  usersService : UsersService = inject(UsersService);
  message: string = '';

  applyForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })


  submitForm() {
    this.response = '';

    this.usersService.createUser(
      this.applyForm.value.nom,
      this.applyForm.value.prenom,
      this.applyForm.value.age,
      this.applyForm.value.email,
      this.applyForm.value.password,
      ).then((data) => {
        console.log(data)
        this.message = data.message;
      })

      
  }
  reset(){
    this.message = '';
  }
}
