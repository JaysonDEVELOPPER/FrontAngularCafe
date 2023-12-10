import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule ,Validators} from '@angular/forms';
import { Users } from '../interfaces/users';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss',
})
export class UpdateUserComponent {
  response: any = { message: '' };
  delete: any = { deleteMessage: '' };

  userService: UsersService = inject(UsersService);
  routes: ActivatedRoute = inject(ActivatedRoute);

  user: Users = {
    iduser: 0,
    nom: '',
    email: '',
    age: 0,
    prenom: '',
    password: '',
    role: '',
  };

  applyForm = new FormGroup({
    id: new FormControl({ value: '', disabled: true }, Validators.required),
    nom: new FormControl(),
    prenom: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    role: new FormControl(),
  });

  submitForm() {
    this.response = '';
    const usersUpdate = {
      id: this.applyForm.value.id,
      nom: this.applyForm.value.nom,
      prenom: this.applyForm.value.prenom,
      age: this.applyForm.value.age,
      email: this.applyForm.value.email,
      password: this.applyForm.value.password,
      role: this.applyForm.value.role,
    };
    console.log(usersUpdate);
    this.userService
      .updateUser(
        parseInt(this.routes.snapshot.params['id']),
        this.applyForm.value.nom,
        this.applyForm.value.prenom,
        this.applyForm.value.age,
        this.applyForm.value.email,
        this.applyForm.value.password,
        this.applyForm.value.role
      )
      .then((data) => {
        console.log(data);
        this.response = data.message;
      });
  }

  constructor() {
    this.userService
      .getByIdUser(parseInt(this.routes.snapshot.params['id']))
      .then((data) => {
        this.user = data.data[0];
      });
  }
}
