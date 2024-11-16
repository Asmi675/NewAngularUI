import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
registerObj:any={
  userName:"",
  email:"",
  phone:"",
  password:"",
  name:"",
  role:"user"
}
loginObj:any={
  userName:"",
  password:""
}
ischeck:boolean=false
http=inject(HttpClient)
router = inject(Router)

onRegister(){
  console.log(this.registerObj)
  if (this.ischeck) {
    this.registerObj.role="provider"
  }
  this.http.post("https://localhost:7001/api/AuthApi/Register",this.registerObj).subscribe((res:any)=>{
    console.log(res)
    if(res.isSuccessful){
      if (this.registerObj.role=='user') {
        this.http.post("https://localhost:5002/api/UserApi",this.registerObj).subscribe((user:any)=>{
          console.log(user)
          if (user.result) {
            alert("Successfully registered User")
          }
        })
      }
      if (this.registerObj.role=='provider') {
        this.http.post("https://localhost:7057/api/Services/Register",this.registerObj).subscribe((user:any)=>{
          console.log(user)
          if (user.result) {
            alert("Successfully registered Service Provider")
          }
        })
      }
      
      
      
      window.location.reload()
      
    }
   else{
    alert("Something went wrong")
   }
  })
  
}

onLogin(){
  this.http.post("https://localhost:7001/api/AuthApi/Login",this.loginObj).subscribe((res:any)=>{
    localStorage.setItem('userName',res.username)
    console.log(res)
  if (res) {
    
    if(res.role=="user") {
      this.router.navigateByUrl('user')
      
    }
    if (res.role=="provider") {
      this.router.navigateByUrl('professionals')
    }
    if(res.role=="admin"){
      this.router.navigateByUrl('admin')
    }
  }
  
  })
}

}
