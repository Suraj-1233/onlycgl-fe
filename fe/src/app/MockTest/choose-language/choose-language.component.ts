import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-language',
  templateUrl: './choose-language.component.html',
  styleUrls: ['./choose-language.component.css']
})
export class ChooseLanguageComponent {
  selectedLanguage: string = 'english'; // Default language

  constructor(private router: Router) {}

  // Function to handle the start of the test
  startTest() {
    console.log('Test started with language:', this.selectedLanguage);
    // You can navigate to the test page or proceed with test logic here
    this.router.navigate(['/question-page']);

  }
}
