import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MockTestComponent } from './MockTest/mock-test/mock-test.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // Default route
  { path: 'mock-test', component: MockTestComponent }, 
];
debugger
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
