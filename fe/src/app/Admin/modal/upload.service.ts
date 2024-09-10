import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private uploadUrl = 'http://localhost:8080/api/mocktests/upload'; // API endpoint URL

  constructor(private http: HttpClient) { }

  // Method to upload the file
  uploadFile(file: File): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('file', file);

    const token = localStorage.getItem('token'); // Assuming you're using a token for authentication
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(this.uploadUrl, formData, {
      headers,
      reportProgress: true,
      observe: 'events',
      responseType: 'text' as 'json' // This tells Angular to treat the response as text
    });
  }
}
