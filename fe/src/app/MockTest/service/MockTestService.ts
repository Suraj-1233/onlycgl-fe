// mock-test.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockTestService {
  private apiUrl = 'http://localhost:8080/api'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  // Method to get mock test details with authorization and content-type headers
  getMockTest(mockTestId: number): Observable<any> {
    const token = localStorage.getItem('token'); // Retrieve the JWT token from local storage

    // Create HTTP headers with Authorization and Content-Type
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json' // Set content type to JSON
    });

    // Make the HTTP GET request with the headers
    return this.http.get<any>(`${this.apiUrl}/mocktest/${mockTestId}`, { headers });
  }
}

