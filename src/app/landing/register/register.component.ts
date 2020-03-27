import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/authentication/auth.service';
import { ToasterService } from 'src/app/service/toaster.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    private auth: AuthService,
    private toaster: ToasterService
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', Validators.required)
      },[this.matchingfield()])
  }
  register(){
    try{
      const register = this.auth.register(this.registerForm.value)
      this.toaster.success(register.message)
    } catch (err){
     this.toaster.error(err.message)
    }
      
  }
  
  matchingfield(){
    return (form: FormGroup) =>{ 
      if(form.get('password').value !==
        form.get('confirmPassword').value){
        return {notSame : true}
      }
    }
  }

}
