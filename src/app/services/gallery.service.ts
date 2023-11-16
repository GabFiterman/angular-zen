import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAlbums(userId?: number): Observable<any[]> {
    const url = userId
      ? `${this.apiUrl}/users/${userId}/albums`
      : `${this.apiUrl}/albums`;

    return this.http.get<any[]>(url);
  }
}
