import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Users } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-user',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './details-user.component.html',
  styleUrl: './details-user.component.scss',
})
export class DetailsUserComponent {
  response: any = { message: '' };
  delete: any = { deleteMessage: '' };
  user: Users = {
    iduser: 0,
    nom: '',
    email: '',
    age: 0,
    prenom: '',
    password: '',
    role: '',
  };
  userService: UsersService = inject(UsersService);
  routes: ActivatedRoute = inject(ActivatedRoute);

  constructor(private location: Location) {
    this.userService
      .getByIdUser(parseInt(this.routes.snapshot.params['id']))
      .then((data) => {
        console.log(data);
        this.user = data.data[0];
        this.response = data.message;
      });
  }
  deleteUser(id: number) {
    this.userService.deleteProduct(id).then((data) => {
      console.log(data);
      this.location.back();
    });
  }
}
