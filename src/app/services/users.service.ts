import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  // Méthode pour envoyer les données de l'utilisateur vers le backend
  sendDataToBackend(userData: any): Observable<any> {
    // URL de votre backend où vous souhaitez envoyer les données de l'utilisateur
    const backendUrl = 'http://localhost:3000/users';
    // Utilisation de HttpClient pour envoyer les données au backend
    return this.http.post<any>(backendUrl, userData);
  }
}
