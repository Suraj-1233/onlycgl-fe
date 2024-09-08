import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockTestComponent } from './MockTest/mock-test/mock-test.component';
import { TestInstructionsComponent } from './MockTest/test-instructions/test-instructions.component';
import { HeaderComponent } from './MockTest/header/header.component';
import { ChooseLanguageComponent } from './MockTest/choose-language/choose-language.component';
import { QuestionPageComponent } from './MockTest/question-page/question-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MockTestComponent,
    TestInstructionsComponent,
    HeaderComponent,
    ChooseLanguageComponent,
    QuestionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
