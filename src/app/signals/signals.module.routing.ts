import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './page/counter-page/counter-page.component';
import { UserInfoPageComponent } from './page/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './page/properties-page/properties-page.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [
      {
        path: 'counter', component: CounterPageComponent
      },
      {
        path: 'user-info', component: UserInfoPageComponent
      },
      {
        path: 'mutacion', component: PropertiesPageComponent
      },
      {
        path: '**', redirectTo: 'counter'
      }
    ]
  },
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )


export class SignalsModuleRouting { }
