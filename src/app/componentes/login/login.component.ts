import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormulaOneService } from 'src/app/services/formulaOne.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }


  ingresar() {
    console.log(this.formLogin);
    const usuario = this.formLogin.value.username;
    const password = this.formLogin.value.password;

    if (usuario == 'admin' && password == 'admin') {
     //redireccion al dashboard 
      this.fakeloading();  //simulacion de carga

    }else{
      //mensaje de error
      this.error();
      this.formLogin.reset();
    }
  }


  error(){
    this._snackBar.open('Usuario o contraseña incorrectos', 'Error', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  fakeloading(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 2000);
  }

}
