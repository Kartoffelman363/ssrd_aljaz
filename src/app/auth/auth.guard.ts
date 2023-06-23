import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuardAdmin: CanActivateFn = (route, state) => {
  const router =  inject(Router);
  if(sessionStorage.getItem('isAdmin') === 'true')
    return true;
  return router.parseUrl('/login');
};

export const authGuardLogin: CanActivateFn = (route, state) => {
  const router =  inject(Router);
  if(sessionStorage.getItem('isAdmin') === 'true')
    return router.parseUrl('/admin');
  return true;
};