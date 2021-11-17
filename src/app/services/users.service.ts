import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//interface
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URI = 'http://localhost:3000'

  constructor(private http: HttpClient) { }
  getItems() {
    return this.http.get(`${this.API_URI}/users`);
  }
  getItem(id: string | number) {
    return this.http.get(`${this.API_URI}/users/${id}`);
  }
  saveItem(user: User) {
    return this.http.post(`${this.API_URI}/users`, user);
  }
  deleteItem(id: string | number): Observable<User> {
    return this.http.delete(`${this.API_URI}/users/${id}`);
  }
  updateItem(id: string | number, user: User): Observable<User> {
    return this.http.patch(`${this.API_URI}/users/${id}`, user);
  }

}
