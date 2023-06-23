import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  vnos = new FormGroup({
    ime:    new FormControl('', [Validators.required]),
    geslo:  new FormControl('', [Validators.required])
  }, [Validators.required]);

  constructor(private router: Router) {}

  logIn() {
    sessionStorage.setItem('isAdmin', 'true');
    router:Router;
    this.router.navigate(['/', 'admin']);
  }
}
