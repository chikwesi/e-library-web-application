import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, ADMIN_USER } from 'src/app/authentication/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Role } from 'src/app/model/data-model';
import { ToasterService } from 'src/app/service/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private router: Router,
    private auth: AuthService,
    private toasterService: ToasterService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  login() {
    const form = this.loginForm.value
    console.log(form)
    console.log(ADMIN_USER.username, ADMIN_USER.password)
    if(form.username == ADMIN_USER.username &&  form.password == ADMIN_USER.password){
      this.auth.setLoggedInUser({userId: 0, status: true})
      this.router.navigateByUrl('/dashboard')
      return
    } 
    try{
      const access = this.auth.login(this.loginForm.value)
      this.router.navigateByUrl('/user')
      this.toasterService.success(access.message)
    } catch (err){
      this.toasterService.error(err.message)
    }


  }
}
