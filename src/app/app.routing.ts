import { Routes, RouterModule } from '@angular/router';
import { WhiteBoardComponent } from './white-board/white-board.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent },
  { path: '**', component: WhiteBoardComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
