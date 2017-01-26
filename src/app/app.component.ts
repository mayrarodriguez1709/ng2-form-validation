import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loginForm: FormGroup;

  name: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;

  constructor(
    private fb: FormBuilder
  ){
    this.loginForm = this.buildLoginForm;
    this.createControls();
    
  }

  private get buildLoginForm(){
    let inputs = {
      'name' : [ '', Validators.required],
      'email' : [ '', Validators.required],
      'password' : [ '', Validators.required]
    };

    return this.fb.group(inputs)
  }

  createControls(){
    this.name = this.loginForm.controls['name'];
    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
  }
  

  onSubmit(){
    let name = this.loginForm.get('name').value;
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;

    console.log('¡Formulario Validado!')
    console.log(this.loginForm.value)
  }
}
