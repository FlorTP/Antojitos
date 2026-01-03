import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
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
debugger
    if (this.loginForm.valid) {
      const param = {
        username: this.loginForm.value.usuario,
        password: this.loginForm.value.password,
      };

      this.authService.login(param).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.accessToken);
          localStorage.setItem('nombreUsuario', res.nombreEmpl + ' ' + res.apellidoPatEmpl + ' ' + res.apellidoMatEmpl);
          localStorage.setItem('idUsuario', res.idUsuario);
          localStorage.setItem('idSesion', res.idSesion);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => console.error(err),
      });
      // this.router.navigate(['/dashboard']);
    }

  }
}
