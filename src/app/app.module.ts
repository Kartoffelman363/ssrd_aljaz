import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GostComponent } from './gost/gost.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { authGuardAdmin, authGuardLogin } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', component: GostComponent },
  { path: 'login',  component: AdminLoginComponent, canActivate: [authGuardLogin]},
  { path: 'admin',  component: AdminComponent,      canActivate: [authGuardAdmin]}
]

@NgModule({
  declarations: [
    AppComponent,
    GostComponent,
    AdminLoginComponent,
    AdminComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule,
//    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
