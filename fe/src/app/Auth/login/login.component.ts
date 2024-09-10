import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        // Handle successful login
        // alert('Login successful');
        localStorage.setItem('token', response.token);


        console.log(response);
      },
      error: (error) => {
        // Handle error
        console.error(error);
        alert('Invalid credentials');
      }
    });
  }
}
