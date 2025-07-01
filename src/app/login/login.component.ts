import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Output() formSubmitted = new EventEmitter();

  formLogin = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  constructor(private router: Router) {}

  onSubmit() {
    if (this.formLogin.valid) {
      const { username, password } = this.formLogin.value;

      if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('admin', 'true');
        this.router.navigate(['/admin']);
      } else {
        // El error a nivel formulario
        this.formLogin.setErrors({ credencialesInvalidas: true });
      }
    }
  }

}
