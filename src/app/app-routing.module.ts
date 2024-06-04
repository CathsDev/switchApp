import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SwitchPageComponent} from './pages/switch-page/switch-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'switch',
        pathMatch: 'full'
    },
    {
        path: 'switch',
        component: SwitchPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
