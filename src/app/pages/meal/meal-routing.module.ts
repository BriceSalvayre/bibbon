import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealPage } from './meal.page';

const routes: Routes = [
  {
    path: '',
    component: MealPage
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealPageRoutingModule {}
