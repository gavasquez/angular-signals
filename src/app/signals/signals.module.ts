import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { SignalsModuleRouting } from './signals.module.routing';
import { MenuComponent } from './components/menu/menu.component';
import { UserInfoPageComponent } from './page/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './page/properties-page/properties-page.component';

@NgModule( {
  imports: [
    CommonModule,
    SignalsModuleRouting
  ],
  declarations: [ SignalsLayoutComponent, UserInfoPageComponent, MenuComponent, PropertiesPageComponent ]
} )
export class SignalsModule { }
