import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    formGroup: FormGroup;
    validUsr: boolean = false;
    errorMsg: string=null;


    constructor(private loginSrv: LoginService,
                private router: Router) {
    }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
    userName: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
    });
  }

  prsLogin() {
    if(this.formGroup.valid) {
      this.loginSrv.login(this.formGroup.value)
      .subscribe(result=>{this.validUsr = result;
        if(this.validUsr) {
          this.manageTickets();
        }
      },
      error => {this.errorMsg = error});
    }
  }

  manageTickets() {
    this.router.navigate(['/wrsTickets']);
  }
}
