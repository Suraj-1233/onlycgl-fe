import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MockTestComponent } from './MockTest/mock-test/mock-test.component';
import { TestInstructionsComponent } from './MockTest/test-instructions/test-instructions.component';
import { ChooseLanguageComponent } from './MockTest/choose-language/choose-language.component';
import { QuestionPageComponent } from './MockTest/question-page/question-page.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // Default route
  { path: 'mock-test', component: MockTestComponent }, 
  { path: 'mock-test/instructions', component: TestInstructionsComponent },
  { path: 'mock-test/choose-language', component: ChooseLanguageComponent },
  { path: 'mock-test/question-page', component: QuestionPageComponent }, // Route to question page


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
