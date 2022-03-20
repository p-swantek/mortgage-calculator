import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mortgage',
    loadChildren: () =>
      import('./mortgage/mortgage.module').then(m => m.MortgageModule)
  },
  {
    path: '**',
    redirectTo: 'mortgage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
