import { LandingComponent } from './apply/landing/landing.component';
import { SearchComponent } from './search/search.component';
import { ApplyComponent } from './../../../ui/src/app/apply/apply.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'apply', component: ApplyComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'search', component: SearchComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
