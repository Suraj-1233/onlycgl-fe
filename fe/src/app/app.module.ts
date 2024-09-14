import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockTestComponent } from './MockTest/mock-test/mock-test.component';
import { TestInstructionsComponent } from './MockTest/test-instructions/test-instructions.component';
import { HeaderComponent } from './MockTest/header/header.component';
import { ChooseLanguageComponent } from './MockTest/choose-language/choose-language.component';
import { QuestionPageComponent } from './MockTest/question-page/question-page.component';
import { LoginComponent } from './Auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateMockTestComponent } from './Admin/modal/create-mock-test/create-mock-test.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    MockTestComponent,
    TestInstructionsComponent,
    HeaderComponent,
    ChooseLanguageComponent,
    QuestionPageComponent,
    LoginComponent,
    CreateMockTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
