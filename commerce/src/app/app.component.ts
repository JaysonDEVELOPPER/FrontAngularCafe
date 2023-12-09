import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { LoginComponent } from './login/login.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule, RouterOutlet,ProduitsComponent,LoginComponent,PresentationComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'commerce';
}
