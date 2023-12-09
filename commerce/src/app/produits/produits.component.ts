import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { ProduitsService } from '../services/produits.service';
import { Produits } from '../interfaces/produits';
import { AppComponent } from '../app.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule,AppComponent,FooterComponent],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.scss',
})
export class ProduitsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  produitService: ProduitsService = inject(ProduitsService);
  allProduits: Produits[] = [];
  message: string = '';

  constructor() {
    this.route.snapshot
    this.produitService.getAllProduits().then((data) => {
      console.log(data);
      this.allProduits = data.data;
      this.message = data.message;
    });
  }
}

interface Response {
  getAllProduit: any;
  message: string;
}


// import { CommonModule } from '@angular/common';
// import { Component, inject } from '@angular/core';
// import { RouterModule, RouterOutlet } from '@angular/router';
// import { ProduitsService } from '../services/produits.service';
// import { Produits } from '../interfaces/produits';

// @Component({
//   selector: 'app-produits',
//   standalone: true,
//   imports: [CommonModule, RouterModule, RouterOutlet],
//   templateUrl: './produits.component.html',
//   styleUrl: './produits.component.scss',
// })
// export class ProduitsComponent {
//   produitService: ProduitsService = inject(ProduitsService);
//   allProduits: Produits[] = [];

//   constructor() {
//     this.produitService.getAllProduits().then((data) => {
//       this.allProduits = data.data;
//     });
//   }
// }

// interface Response {
//   getAllProduit: any;
//   message: string;
// }
