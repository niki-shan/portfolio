import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './shared/components/about/about.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { ExprienceComponent } from './shared/components/exprience/exprience.component';

const routes: Routes = [
  {
    path : 'About',
    component : AboutComponent
  },
  {
    path : 'exprience',
    component : ExprienceComponent
  },

  {
    path : 'contact',
    component : ContactComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
