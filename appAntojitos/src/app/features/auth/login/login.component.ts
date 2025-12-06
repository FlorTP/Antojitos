import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(/^\d+$/)]],
      password: ['', Validators.required],
    });
  }

  get usuario() { return this.loginForm.get('usuario'); }

  ngOnInit(): void {
    //cargar combo de usuarios
  }

  onSubmit(): void {

    if (this.loginForm.valid) {
      const param = {
        usuario: this.loginForm.value.usuario,
        password: this.loginForm.value.password,
      };

      // this.authService.login(param).subscribe({
      //   next: (res) => {
      //     localStorage.setItem('token', res.token);
      //     this.router.navigate(['/dashboard']);
      //   },
      //   error: (err) => console.error(err),
      // });
      this.router.navigate(['/dashboard']);
    }

  }
}
