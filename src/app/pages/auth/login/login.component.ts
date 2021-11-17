import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  loading = false;
  hide = true;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(20, Validators.min(10));

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      color: this.colorControl,
      fontSize: this.fontSizeControl,
      nick: ['', Validators.required],
      pass: ['', Validators.required],
    })
  };

  ngOnInit(): void {
  }

  ingresar() {
    const nick = this.form.value.nick;
    const pass = this.form.value.pass;
    //hardcodear
    if (nick == 'admin' && pass == '123') {
      this.redireccionamosDashboard();
    } else {
      this.error();
      this.form.reset();
    }
  }

  error() {
    this._snackBar.open('usuario o contraseña invalidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  };

  redireccionamosDashboard() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.openSnackBar();
      this.router.navigate(['dashboard']);
    }, 1500);
  };

  openSnackBar() {
    this._snackBar.open('Bienvenido', this.form.value.nick, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:1000
    });
  }
}
