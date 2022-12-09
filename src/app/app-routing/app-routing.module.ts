import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp2Component } from '../comp2/comp2.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ProtectedCompComponent } from '../protected-comp/protected-comp.component';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  { path: '', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },
  {
    path: 'login',
    component: ProtectedCompComponent,
    canActivate: [AuthGuardService],
  },
  // "Catch all" route must be last!
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  // creates an NgModule containing all directives and given routes
  imports: [RouterModule.forRoot(routes)],
  // export the module for routing usage
  exports: [RouterModule],
})
export class AppRoutingModule {}
