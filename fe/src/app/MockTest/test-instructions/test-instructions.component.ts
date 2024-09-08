import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-instructions',
  templateUrl: './test-instructions.component.html',
  styleUrls: ['./test-instructions.component.css']
})
export class TestInstructionsComponent {
  constructor(private router: Router) {}

  goToTests() {
    this.router.navigate(['/tests']);  // Navigate to the tests page
  }
}
