import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {


    

public userForm! : FormGroup;

constructor (private fb: FormBuilder , private sdb : UsersService ){}

ngOnInit(): void { 
 
this.userForm = this.fb.group(
{
  username : this.fb.control(''),
fullname : this.fb.control(''),
email : this.fb.control(''),
password : this.fb.control(''),

}
)

}

onSubmit() {
  
let uservalue :any = this.userForm.value ;  
this.sdb.sendDataToBackend(uservalue) 
.subscribe({
next : data =>{

  alert(JSON.stringify(data))
},
error : err =>{

  console.log(err) ;
}

})

}

}
