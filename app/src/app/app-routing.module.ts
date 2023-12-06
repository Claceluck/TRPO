import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestCoComponent } from './components/test-co/test-co.component';

const routes: Routes = [
  { path: 'test', component: TestCoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
