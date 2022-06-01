import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VedioGameComponent} from './connectnow/vedio-game/vedio.game.component';

const routes: Routes = [
  {
    path: 'vedioGames', component: VedioGameComponent
  },
  {
    path: 'contact',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {path: '**', redirectTo: 'vedioGames'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
