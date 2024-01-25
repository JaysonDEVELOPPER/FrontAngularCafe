import { Component } from '@angular/core';
import { ProduitsService } from '../services/produits.service';
import { Produits } from '../interfaces/produits';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.scss'
})
export class PanierComponent {

}
