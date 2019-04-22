import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './candidate.matching/home/home.component';
import { LayoutComponent } from './candidate.matching/layout/layout.component';

const matchingCandidatesRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      } 
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' } //wildcard routes
  //TODO: Create ErrorComponent
];

@NgModule({
  imports: [RouterModule.forRoot(matchingCandidatesRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
