// mock-test.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockTestService {
  private apiUrl = 'http://localhost:8080/api'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getMockTest(mockTestId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/mocktest/${mockTestId}`);
  }
}
