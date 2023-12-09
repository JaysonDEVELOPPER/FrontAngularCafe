import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url: string = 'http://localhost:3003/users';
  constructor() {}

  async getAllUsers(): Promise<Users[]> {
    const data = await fetch(`${this.url}/`);
    return data.json();
  }

  async getByIdUser(id: number | null | undefined): Promise<Users[]> {
    const data = await fetch(`${this.url}/byid/${id}`);
    return data.json();
  }

  async createUser(
    email: string | null | undefined,
    role: string | null | undefined,
    password: string | null | undefined,
    prenom: string | null | undefined,
    nom: string | null | undefined
  ): Promise<any> {
    const data = await fetch(`${this.url}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        role: role,
        nom: nom,
        prenom: prenom,
        password: password,
      }),
    });
    return data.json();
  }

  async updateUser(id: number, users: Users): Promise<any> {
    const data = await fetch(`${this.url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(users),
    });
    return data.json();
  }
  async deleteProduct(id: number): Promise<Users> {
    const data = await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
    return data.json();
  }

  async login(
    email: string | null | undefined,
    password: string | null | undefined
  ): Promise<any> {
    try {
      const response = await fetch(`${this.url}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la connexion');
      }

      return response.json();
    } catch (error) {
      console.error('Erreur dans login:', error);
      throw error;
    }
  }
}
