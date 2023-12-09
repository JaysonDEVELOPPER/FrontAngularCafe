import { Injectable } from '@angular/core';
import { Produits } from '../interfaces/produits';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class ProduitsService {
  url: string = 'http://localhost:3003/produits/';

  constructor() {}

  async getAllProduits(): Promise<Response> {
    const data = await fetch(`${this.url}`);
    return data.json();
  }

  async getProductById(id: number): Promise<Produits> {
    console.log(id);
    const data = await fetch(`${this.url}byid/${id}`);
    return data.json();
  }

  async createProduct(
    nom: string | null | undefined,
    prix: number | null | undefined,
    quantiter: number | null | undefined
  ): Promise<any> {
    const data = await fetch(`${this.url}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom: nom, prix: prix, quantiter: quantiter }),
    });
    return data.json();
  }

  async updateProduct(id: number, product: Produits): Promise<any> {
    const data = await fetch(`${this.url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return data.json();
  }

  async deleteProduct(id: number): Promise<Produits> {
    console.log(id);
    const data = await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
    return data.json();
  }
}
