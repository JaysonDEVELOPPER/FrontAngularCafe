import { Component,inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
}
