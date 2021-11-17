import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//interface
import { Categoria } from '../interfaces/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  API_URI = 'http://localhost:3000'

  constructor(private http: HttpClient) { }
  getItems() {
    return this.http.get(`${this.API_URI}/products/categorias`);
  }
  getItem(id: string | number) {
    return this.http.get(`${this.API_URI}/products/categorias/${id}`);
  }
  saveItem(categoria: Categoria) {
    return this.http.post(`${this.API_URI}/products/categorias/add`, categoria);
  }
  deleteItem(id: string | number): Observable<Categoria> {
    return this.http.delete(`${this.API_URI}/products/categorias/${id}`);
  }
  updateItem(id: string | number, categoria: Categoria): Observable<Categoria> {
    return this.http.patch(`${this.API_URI}/products/categorias/${id}`, categoria);
  }
}
