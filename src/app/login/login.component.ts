import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public userForm! : FormGroup;

  constructor (private fb: FormBuilder , private sdb : UsersService ){}
  
  ngOnInit(): void { 
   
  this.userForm = this.fb.group(
  {
  
  email : this.fb.control(''),
  password : this.fb.control(''),
  
  }
  )
  
  }


onsubmit(){




}





}
